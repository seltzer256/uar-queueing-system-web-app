import React from "react";
import Layout from "../components/layout/layout.component";
import { PAGES_DATA } from "../lib/data";
import ShiftAssignment from "../components/shift-assignment/shift-assignment.component";

const ShiftAssignmentPage = () => {
  return (
    <Layout
      hideFooter
      hideHeader
      hideTopPadding
      staticNav
      seo={{
        title: "Turnos",
      }}
    >
      <ShiftAssignment />
    </Layout>
  );
};

export default ShiftAssignmentPage;
