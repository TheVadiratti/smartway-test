import { type ReactNode } from 'react';
import Styles from './PageContainer.module.css';

interface Props {
  children: ReactNode;
  extraClass?: string;
}

export default function PageContainer({ children, extraClass }: Props) {
  const mainClasses = [Styles.container];
  if (extraClass) mainClasses.push(extraClass);

  return <main className={mainClasses.join(' ')}>{children}</main>;
}
