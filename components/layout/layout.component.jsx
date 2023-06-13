/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import SEO from "../seo/seo.component";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import { AppContainer } from "../../styles/app.styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({
  seo,
  children,
  hideLogin,
  hideRegister,
  hideTopPadding,
  hideFooter,
  hideHeader,
  staticNav,
}) => {
  return (
    <>
      {seo && <SEO data={seo} />}
      {!hideHeader && (
        <Header
          hideLogin={hideLogin}
          hideRegister={hideRegister}
          staticNav={staticNav}
        />
      )}
      <AppContainer
        hidepadding={hideTopPadding ? 1 : 0}
        staticnav={staticNav ? 1 : 0}
      >
        {children}
      </AppContainer>
      {!hideFooter && <Footer />}
      <ToastContainer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
