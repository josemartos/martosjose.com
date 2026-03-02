import { ReactNode } from 'react';
import { Layout } from 'components';
import { Title } from 'components/Title';

interface BasePageProps {
  children: ReactNode;
  title: string;
}

export default function BasePage({ children, title }: BasePageProps) {
  return (
    <Layout>
      <Title title={title} />
      {children}
    </Layout>
  );
}
