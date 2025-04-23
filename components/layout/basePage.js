import { useContext, useEffect } from 'react';
import { Layout } from 'components';
import { Title } from 'components/Title';

import AppContext from 'context/appContext';

export default function BasePage({ children, title }) {
  const { setTheme } = useContext(AppContext);

  useEffect(() => {
    setTheme('white');

    return function cleanup() {
      setTheme('normal');
    };
  }, [setTheme]);

  return (
    <Layout>
      <Title title={title} />
      {children}
    </Layout>
  );
}
