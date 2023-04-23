import React from "react";
import QueueView from "../layouts/QueueView/queue-view.component";
import Layout from "../components/layout/layout.component";
import { PAGES_DATA } from "../lib/data";

const QueueViewPage = () => {
  return (
    <Layout
      hideFooter
      hideHeader
      hideTopPadding
      staticNav
      seo={{
        title: "Login Page",
      }}
    >
      <QueueView {...PAGES_DATA.QUEUE_VIEW} />
    </Layout>
  );
};

export default QueueViewPage;
