import LayoutProvider from '@context/layout/Layout.provider';
import Layout from '@layout/Layout';

import Pages from '@pages/Pages';

function App() {
  return (
    <LayoutProvider>
      <Layout>
        <Pages />
      </Layout>
    </LayoutProvider>
  );
}

export default App;
