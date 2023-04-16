import Layout from "../components/layout/layout.component";
import Register from "../components/register/register.component";

const RegisterPage = () => {
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
