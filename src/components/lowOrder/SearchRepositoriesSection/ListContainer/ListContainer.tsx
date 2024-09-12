import { type ReactNode } from 'react';
import Styles from './ListContainer.module.css';

interface Props {
  children: ReactNode;
}

export default function ListContainer({ children }: Props) {
  return <ul className={Styles.container}>{children}</ul>;
}
