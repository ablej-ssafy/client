import 'react-datepicker/dist/react-datepicker.css';

import {useState} from 'react';
import DatePicker from 'react-datepicker';

import DateButton from '@/features/portfolio/DateButton';

const CustomDatePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={date => setDate(date!)}
      customInput={<DateButton />}
      placeholderText="입력해주세요"
      tabIndex={1}
      locale={'ko_KR'}
    />
  );
};

export default CustomDatePicker;
