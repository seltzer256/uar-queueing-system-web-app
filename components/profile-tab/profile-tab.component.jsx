import { Grid } from "@mui/material";
import React from "react";
import PostCard from "../post-card/post-card.component";
import * as S from "./profile-tab.styles";

const ProfileTab = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} md={4} display={{ xs: "none", md: "block" }} />
      <Grid item xs={12} sm={12} md={8}>
        <S.Title className="dark">Recent Posts</S.Title>
        <S.PostsWrapper>
          <PostCard
            title="M4 bumpers options"
            description="Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves with a characteristic velocity. "
            authorName="John Doe"
            postId="123"
            hideAvatar
          />
          <PostCard
            title="M4 bumpers options"
            description="Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves with a characteristic velocity. "
            authorName="John Doe"
            postId="123"
            hideAvatar
          />
        </S.PostsWrapper>
      </Grid>
    </Grid>
  );
};

export default ProfileTab;
