import Layout from "../components/layout/layout.component";
import Register from "../components/register/register.component";
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

const RegisterPage = () => {
  return (
    <Layout
      hideFooter
      staticNav
      hideRegister
      seo={{
        title: "Register Page",
      }}
    >
      <Register />
    </Layout>
  );
};

export default RegisterPage;
