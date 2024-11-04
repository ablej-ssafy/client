import classNames from 'classnames/bind';
import {ChangeEvent, InputHTMLAttributes, useState} from 'react';
import {FaImagePortrait} from 'react-icons/fa6';

import styles from './imageInput.module.scss';

type ImageInputProps = NormalInputProps | LabeledInputProps;

type NormalInputProps = {
  isLabeled?: false;
} & InputHTMLAttributes<HTMLInputElement>;

type LabeledInputProps = {
  isLabeled: true;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;
const cx = classNames.bind(styles);

const ImageInput = (props: ImageInputProps) => {
  const [image, setImage] = useState('');

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (!reader.result) return;
      setImage(reader.result.toString());
    };

    props.onChange?.(e);
  };

  return (
    <div className={cx('image-input-container')}>
      {props.isLabeled && <span className={cx('label')}>{props.label}</span>}
      <label htmlFor="image-input" className={cx('image-input-label')}>
        {image ? (
          <img src={image} alt="프로필 이미지" className={cx('image')} />
        ) : (
          <FaImagePortrait size={44} />
        )}
      </label>
      <input
        {...props}
        id="image-input"
        type="file"
        accept="image/*"
        formEncType="multipart/form-data"
        alt="이미지 입력 필드"
        className={cx('image-input')}
        onChange={handleChangeImage}
      />
    </div>
  );
};

export default ImageInput;
