import { type ReactNode } from 'react';
import Styles from './PageContainer.module.css';

interface Props {
  children: ReactNode;
}

export default function PageContainer({ children }: Props) {
  return <main className={Styles.container}>{children}</main>;
}
