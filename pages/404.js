import React from "react";
import Container from "@mui/material/Container";
import Layout from "../components/layout/layout.component";

const NotFoundPage = () => (
  <Layout seo={{ title: "404: Not Found" }}>
    <Container
      style={{ textAlign: "center", paddingTop: "10em", paddingBottom: "10em" }}
    >
      <h1>NOT FOUND</h1>
    </Container>
  </Layout>
);

export default NotFoundPage;
