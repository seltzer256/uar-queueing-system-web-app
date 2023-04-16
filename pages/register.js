import Layout from "../components/layout/layout.component";
import Register from "../components/register/register.component";
import React, { useContext } from "react";
import { AccountContext } from "../context/account-provider";
import { useEffect } from "react";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const { isLoggedIn } = useContext(AccountContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, []);

  return (
    <Layout
      hideFooter
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
