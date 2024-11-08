import classNames from 'classnames/bind';
import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {ChangeEvent, InputHTMLAttributes, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {FaImagePortrait} from 'react-icons/fa6';

import ableJ from '@/services/ableJ';

import styles from './imageInput.module.scss';

type ImageInputProps = NormalInputProps | LabeledInputProps;

type NormalInputProps = {
  imageUrl?: string;
  isLabeled?: false;
} & InputHTMLAttributes<HTMLInputElement>;

type LabeledInputProps = {
  imageUrl?: string;
  isLabeled: true;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;
const cx = classNames.bind(styles);

const ImageInput = (props: ImageInputProps) => {
  const router = useRouter();
  const [image, setImage] = useState('');

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    const file = e.currentTarget.files[0];

    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      toast.error('로그인이 필요합니다.');
      router.replace('/signin');
      return;
    }

    const response = await ableJ.uploadProfileImage(file, accessToken);
    setImage(response.data);

    props.onChange?.(e);
  };

  useEffect(() => {
    setImage(props.imageUrl || '');
  }, [props.imageUrl]);

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
        name=""
        id="image-input"
        type="file"
        accept="image/*"
        formEncType="multipart/form-data"
        alt="이미지 입력 필드"
        className={cx('image-input')}
        onChange={handleChangeImage}
      />
      <input name={props.name} defaultValue={image} hidden />
    </div>
  );
};

export default ImageInput;
