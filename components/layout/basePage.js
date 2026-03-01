import { Layout } from 'components';
import { Title } from 'components/Title';

export default function BasePage({ children, title }) {
  return (
    <Layout>
      <Title title={title} />
      {children}
    </Layout>
  );
}
