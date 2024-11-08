import classNames from 'classnames/bind';
import {MouseEvent, useEffect, useRef, useState} from 'react';

import useClickOutside from '@/hooks/useClickOutside';

import styles from './dropdownMenu.module.scss';

const cx = classNames.bind(styles);

type DropdownMenuProps =
  | NormalDropdownMenuPropsProps
  | LabeledDropdownMenuPropsProps;

type NormalDropdownMenuPropsProps = {
  isLabeled?: false;
  items: DropdownMenuItem[];
  defaultValue?: string;
  name?: string;
};

type LabeledDropdownMenuPropsProps = {
  isLabeled: true;
  label: string;
  items: DropdownMenuItem[];
  defaultValue?: string;
  name?: string;
};

interface DropdownMenuItem {
  id: string;
  text: string;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const id = props.isLabeled ? props.label : undefined;
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleClickItem = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
    setIsOpen(false);
  };

  useEffect(() => {
    setValue(props.defaultValue || '');
  }, [props.defaultValue]);

  return (
    <div className={cx('input-container')}>
      {props.isLabeled && (
        <label htmlFor={props.label} className={cx('label')}>
          {props.label}
        </label>
      )}
      <div className={cx('dropdown')} ref={dropdownRef}>
        <button
          {...props}
          id={id}
          className={cx('dropdown-button')}
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {props.items.find(item => item.id === value)?.text || '선택'}
        </button>
        {isOpen && (
          <ul className={cx('dropdown-list')}>
            {props.items.map(item => (
              <li key={item.id} className={cx('dropdown-item')}>
                <button type="button" value={item.id} onClick={handleClickItem}>
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        )}
        <input type="hidden" defaultValue={value} name={props.name} />
      </div>
    </div>
  );
};

export default DropdownMenu;
