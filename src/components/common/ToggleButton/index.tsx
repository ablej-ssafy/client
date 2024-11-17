import classNames from 'classnames/bind';

import styles from './toggleButton.module.scss';

interface ToggleButtonProps {
  onToggle: () => void;
  isToggled: boolean;
}

const cx = classNames.bind(styles);

const ToggleButton = ({onToggle, isToggled}: ToggleButtonProps) => {
  return (
    <button
      className={cx('toggle-button', {toggled: isToggled})}
      onClick={onToggle}
    >
      <div className={cx('ball')} />
    </button>
  );
};

export default ToggleButton;
