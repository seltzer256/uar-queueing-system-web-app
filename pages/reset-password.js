import React from "react";
import Layout from "../components/layout/layout.component";
import ResetPassword from "../components/reset-password/reset-password.component";

const ResetPasswordPage = () => {
  return (
    <Layout
      seo={{
        title: "Restablecer contraseña",
      }}
    >
      <ResetPassword />
    </Layout>
  );
};

export default ResetPasswordPage;
