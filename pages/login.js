import Layout from "../components/layout/layout.component";
import Login from "../components/login/login.component";
import React from "react";
import nookies from "nookies";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const token = cookies.jwt;

  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const LoginPage = () => {
  return (
    <Layout
      hideLogin
      staticNav
      hideFooter
      seo={{
        title: "Login Page",
      }}
    >
      <Login />
    </Layout>
  );
};

export default LoginPage;
