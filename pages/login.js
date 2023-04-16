import Layout from "../components/layout/layout.component";
import Login from "../components/login/login.component";
import React, { useContext } from "react";
import { AccountContext } from "../context/account-provider";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { isLoggedIn } = useContext(AccountContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, []);

  return (
    <Layout
      hideLogin
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
