import { ButtonHTMLAttributes } from 'react';
import Styles from './Button.module.css';

interface Props extends Omit<ButtonHTMLAttributes<unknown>, 'className'> {}

export default function Button({ children, ...rest }: Props) {
  return (
    // eslint-disable-next-line react/button-has-type,react/jsx-props-no-spreading
    <button className={Styles.button} {...rest}>
      {children}
    </button>
  );
}
