import { Grid, Tab } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import React from "react";
import { useState } from "react";
import CustomImage from "../../components/custom-image/custom-image.component";
import ForumLayoutWrapper from "../../components/forum-layout-wrapper/forum-layout-wrapper.component";
import * as S from "./user-profile.styles";
import ProfileTab from "../profile-tab/profile-tab.component";
import AccountTab from "../account-tab/account-tab.component";

const UserProfile = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleChangeTab = (_, newTab) => {
    setTabValue(newTab);
  };

  return (
    <ForumLayoutWrapper hideBreadcrumbs hideUpcomingEvent>
      <TabContext value={tabValue}>
        <S.Wrapper maxWidth="md">
          <S.TopWrapper>
            <Grid container spacing={3}>
              <Grid item sm={4} md={4} display={{ xs: "none", md: "block" }} />
              <Grid item xs={12} sm={8} md={8}>
                <S.TabsWrapper
                  value={tabValue}
                  onChange={handleChangeTab}
                  aria-label="basic tabs example"
                >
                  <Tab label="Profile" value="1" />
                  <Tab label="Account" value="2" />
                  <Tab label="Posts" value="3" />
                </S.TabsWrapper>
              </Grid>
            </Grid>
          </S.TopWrapper>
          <S.InfoWrapper>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4}>
                <CustomImage img="/assets/images/avatar.png" alt="avatar" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                display={"flex"}
                alignItems={"center"}
              >
                <S.StyledBox style={{ flexDirection: "column" }}>
                  <S.StyledBox className="name">
                    <S.Name>John Doe</S.Name>
                    <S.Nick>@JDoe</S.Nick>
                  </S.StyledBox>
                  <S.StyledBox className="fields">
                    <S.Field>Join: May, 2022</S.Field>
                    <S.Field>Miami, FL, USA</S.Field>
                    <S.Field>Drives: M3 E46</S.Field>
                  </S.StyledBox>
                  <S.Description>
                    Maxwell's equations—the foundation of classical
                    electromagnetism—describe light as a wave that moves with a
                    characteristic velocity.
                  </S.Description>
                  <S.StyledBox style={{ gap: "1.75rem" }}>
                    <S.Feature>
                      60
                      <br />
                      <span>Post</span>
                    </S.Feature>
                    <S.Feature>
                      20
                      <br />
                      <span>Threads</span>
                    </S.Feature>
                    <S.Feature>
                      35
                      <br />
                      <span>Likes</span>
                    </S.Feature>
                  </S.StyledBox>
                </S.StyledBox>
              </Grid>
            </Grid>
          </S.InfoWrapper>
          <S.PanelsWrapper>
            <TabPanel value="1">
              <ProfileTab />
            </TabPanel>
            <TabPanel value="2">
              <AccountTab />
            </TabPanel>
            <TabPanel value="3">posts</TabPanel>
          </S.PanelsWrapper>
        </S.Wrapper>
      </TabContext>
    </ForumLayoutWrapper>
  );
};

export default UserProfile;
