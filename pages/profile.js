import React from "react";
import Layout from "../components/layout/layout.component";
import UserProfile from "../components/user-profile/user-profile.component";

const ProfilePage = () => {
  return (
    <Layout
      belongsToForum
      seo={{
        title: "Post Page",
      }}
    >
      <UserProfile />
    </Layout>
  );
};

export default ProfilePage;
