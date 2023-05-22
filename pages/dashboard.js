import React from "react";
import Layout from "../components/layout/layout.component";
import Dashboard from "../layouts/Dashboard/dashboard.component";
import nookies from "nookies";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const token = cookies.jwt;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const DashboardPage = () => {
  return (
    <Layout
      hideFooter
      hideLogin
      hideRegister
      staticNav
      seo={{
        title: "Dashboard",
      }}
    >
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
