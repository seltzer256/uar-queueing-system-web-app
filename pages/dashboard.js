import React from "react";
import Layout from "../components/layout/layout.component";
import Dashboard from "../layouts/Dashboard/dashboard.component";

const DashboardPage = () => {
  return (
    <Layout hideFooter hideLogin hideRegister staticNav>
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
