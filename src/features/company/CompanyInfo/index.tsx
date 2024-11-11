import Image from 'next/image';
import {TbWorldSearch} from 'react-icons/tb';

import companyLogo from '@/assets/images/companylogo.png';
import KakaoMap from '@/components/common/KakaoMap';
import Tag from '@/components/common/Tag';
import {Company} from '@/types/ableJ';

import styles from './companyInfo.module.scss';

const companyInfo: Company = {
  companyId: 1,
  name: '메디인테크',
  thumbnail:
    'https://storage.googleapis.com/ai-headhunting-resume/company/company-thumbnail-1-cb5f7dea-9c3e-42d6-82c7-8213009d1bb6.jpg',
  address: '서울특별시 종로구 대학로 60 동마루빌딩 2층',
  roadAddress: '서울특별시 종로구 대학로 60',
  latitude: 37.576534,
  longitude: 127.0025224,
  location: '서울',
  strict: '종로구',
};

const CompanyInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles['company-title']}>
          <Image
            className={styles['company-logo']}
            src={companyLogo}
            alt="회사 로고"
            width={100}
            height={100}
          />
          <div className={styles['company-info']}>
            <span className={styles['company-name']}>미리디</span>
            <span className={styles['company-text']}>회사 주소</span>
            <div className={styles['company-search']}>
              <TbWorldSearch size={18} />
              <span className={styles['company-text']}>
                미리디 검색하러 가기
              </span>
            </div>
          </div>
        </div>
        <div className={styles['company-tag']}>
          <Tag title="IT" />
          <Tag title="컨텐츠" />
        </div>
        <p className={styles['company-description']}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <KakaoMap companyInfo={companyInfo} />
    </div>
  );
};

export default CompanyInfo;
