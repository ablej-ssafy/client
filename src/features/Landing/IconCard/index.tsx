import classNames from 'classnames/bind';
import Image, {ImageProps} from 'next/image';
import {ReactNode} from 'react';

import styles from './iconCard.module.scss';

const cx = classNames.bind(styles);

interface LottieCardProps {
  title: string;
  description: string | ReactNode;
  imageOption: ImageProps;
}

const IconCard = ({imageOption, description, title}: LottieCardProps) => {
  return (
    <div className={cx('card')}>
      <Image {...imageOption} className={cx('image')} />
      <div>
        <h2>{title}</h2>
        <p className={cx('paragraph')}>{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
