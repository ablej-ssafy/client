import classNames from 'classnames/bind';
import Image, {ImageProps} from 'next/image';

import styles from './companyImage.module.scss';

const cx = classNames.bind(styles);

const CompanyImage = (props: ImageProps) => {
  return <Image {...props} className={cx('company-image')} />;
};

export default CompanyImage;
