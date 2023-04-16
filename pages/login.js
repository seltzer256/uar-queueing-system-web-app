import Layout from "../components/layout/layout.component";
import Login from "../components/login/login.component";

export async function getServerSideProps(context) {
  // console.log("context :>> ", context);
  // const session = await getSession(context);

  // if (session) {
  //   return {
  //     redirect: {
  //       destination: '/dashboard', // Redirigir al usuario a la página de dashboard si ya está autenticado
  //       permanent: false,
  //     },
  //   };
  // }

  return { props: {} };
}

const LoginPage = () => {
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
