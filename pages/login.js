import Layout from "../components/layout/layout.component";
import Login from "../components/login/login.component";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getLocalStorageItem } from "../lib/utils";
import { USER_ID } from "../lib/constants";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (getLocalStorageItem(USER_ID)) {
      router.push("/");
    }
  }, []);

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
