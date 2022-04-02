import LayoutProvider from "@context/layout/Layout.provider";
import Layout from "@layout/Layout";

function App() {
  return (
    <LayoutProvider>
      <Layout></Layout>
    </LayoutProvider>
  );
}

export default App;
