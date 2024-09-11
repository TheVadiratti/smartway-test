import { ReactNode } from 'react';
import Header from '../../components/lowOrder/Header';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
