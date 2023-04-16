import Layout from "../components/layout/layout.component";
import AppServices from "../layouts/AppServices/app-services.component";
import HomeHero from "../layouts/HomeHero/home-hero.component";
import { PAGES_DATA } from "../lib/data";

const HomePage = () => {
  return (
    <Layout
      seo={{
        title: "Home Page",
      }}
      hideTopPadding
      // hideFooter
    >
      <HomeHero {...PAGES_DATA.HOME} />
      <AppServices {...PAGES_DATA.APP_SERVICES} />
    </Layout>
  );
};

export default HomePage;
