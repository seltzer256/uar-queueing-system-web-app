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

const Layout = ({ seo, children, hideLogin, hideRegister }) => {
  return (
    <>
      {seo && <SEO data={seo} />}
      <Header hideLogin={hideLogin} hideRegister={hideRegister} />
      <AppContainer>{children}</AppContainer>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
