import { Container } from "@mui/material";
import Layout from "../components/layout/layout.component";

const HomePage = () => {
  return (
    <Layout
      seo={{
        title: "Community Home Page",
      }}
    >
      <Container
        style={{
          textAlign: "center",
          paddingTop: "10em",
          paddingBottom: "10em",
        }}
      >
        <h1>Home Page</h1>
      </Container>
    </Layout>
  );
};

export default HomePage;
