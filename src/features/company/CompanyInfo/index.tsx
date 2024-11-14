import Image from 'next/image';
import Link from 'next/link';
import {TbWorldSearch} from 'react-icons/tb';

import KakaoMap from '@/components/common/KakaoMap';
import Tag from '@/components/common/Tag';
import {Company} from '@/types/ableJ';
import {addHttp} from '@/utils/link';

import styles from './companyInfo.module.scss';

interface CompanyInfoProps {
  companyInfo: Company;
}

const CompanyInfo = ({companyInfo}: CompanyInfoProps) => {
  const industryArray = companyInfo.industryName.split(',');
  const formattedDescription = companyInfo.description?.replace(
    /\n/g,
    '<br />',
  );

  return (
    <div className={styles.container}>
      <div>
        <div className={styles['company-title']}>
          <Image
            className={styles['company-logo']}
            src={companyInfo.thumbnail}
            alt={companyInfo.name}
            width={100}
            height={100}
          />
          <div className={styles['company-info']}>
            <span className={styles['company-name']}>{companyInfo.name}</span>
            <span className={styles['company-text']}>
              {companyInfo.address}
            </span>
            {companyInfo.link && (
              <div className={styles['company-search']}>
                <TbWorldSearch size={18} />
                <Link
                  className={styles['company-text']}
                  href={addHttp(companyInfo.link)}
                  target="_blank"
                >
                  {companyInfo.link}
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className={styles['company-tag']}>
          {industryArray.map((industry, index) => (
            <Tag key={index} title={industry} />
          ))}
          <Tag
            title={`${String(companyInfo.foundedYear)}  ~`}
            type="secondary"
          />
          <Tag title={`설립 ${String(companyInfo.age)}년차`} type="secondary" />
        </div>
        {formattedDescription && (
          <p
            className={styles['company-description']}
            dangerouslySetInnerHTML={{__html: formattedDescription}}
          />
        )}
      </div>
      <KakaoMap companyInfo={companyInfo} />
    </div>
  );
};

export default CompanyInfo;
