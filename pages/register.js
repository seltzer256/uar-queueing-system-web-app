import Layout from "../components/layout/layout.component";
import Register from "../components/register/register.component";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getLocalStorageItem } from "../lib/utils";
import { USER_ID } from "../lib/constants";

const RegisterPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (getLocalStorageItem(USER_ID)) {
      router.push("/");
    }
  }, []);

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
