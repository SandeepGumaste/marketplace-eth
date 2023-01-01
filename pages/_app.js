import { BaseLayout } from "components/index";
import "styles/globals.css";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? BaseLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
