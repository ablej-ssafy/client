import classNames from 'classnames/bind';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import LabelInput from '@/components/common/LabelInput';
import JobComboBox from '@/features/auth/JobComboBox';
import ableJ from '@/services/ableJ';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const MyPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const {data} = await ableJ.getProfile(accessToken);

  return (
    <main className={cx('page')}>
      <LabelInput
        inputStyle="primary"
        label="이름"
        name="name"
        type="text"
        defaultValue={data.name}
        readOnly
      />
      <LabelInput
        inputStyle="primary"
        label="이메일"
        name="email"
        type="email"
        readOnly
        defaultValue={data.email}
      />
      <form>
        <JobComboBox prevJob={data.jobCategory.id} standAlone />
      </form>
    </main>
  );
};

export default MyPage;
