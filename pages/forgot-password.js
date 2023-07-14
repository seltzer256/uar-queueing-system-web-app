import React from "react";
import Layout from "../components/layout/layout.component";
import RecoverPassword from "../components/recover-password/recover-password.component";

const ForgotPasswordPage = () => {
  return (
    <Layout
      seo={{
        title: "Recuperar contraseña",
      }}
    >
      <RecoverPassword />
    </Layout>
  );
};

export default ForgotPasswordPage;
