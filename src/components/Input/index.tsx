import classNames from 'classnames';
import styles from './Input.module.scss';

type InputType = {
  placeholder: string;
  className?: string;
};

const Input: React.FC<InputType> = ({ placeholder, className }) => {
  return (
    <input
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default Input;
