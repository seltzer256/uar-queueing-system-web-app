import React from "react";
import Layout from "../components/layout/layout.component";
import UserProfile from "../components/user-profile/user-profile.component";

const ProfilePage = () => {
  return (
    <Layout
      belongsToForum
      seo={{
        title: "Perfil de usuario",
      }}
    >
      <UserProfile />
    </Layout>
  );
};

export default ProfilePage;
