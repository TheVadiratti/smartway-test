import { type LinkProps, Link as RouterLink } from 'react-router-dom';
import Styles from './Link.module.css';

export default function Link({ children, ...rest }: LinkProps) {
  return (
    <RouterLink className={Styles.link} {...rest}>
      {children}
    </RouterLink>
  );
}
