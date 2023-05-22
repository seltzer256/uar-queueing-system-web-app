import React, { useState, useContext } from "react";
import * as S from "./dashboard.styles";
import { Container, Grid, Tab } from "@mui/material";
import { SIDEBAR_ITEMS } from "../../lib/constants";
import { TabContext } from "@mui/lab";
import { AccountContext } from "../../context/account-provider";

const Dashboard = () => {
  const { userData } = useContext(AccountContext);
  const [tabValue, setTabValue] = useState(SIDEBAR_ITEMS.MODULES.value);

  const handleChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <S.Section>
      <Container>
        <TabContext value={tabValue}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <S.StyledTabList onChange={handleChange} orientation="vertical">
                {Object.values(SIDEBAR_ITEMS).map(
                  ({ value, name, icon }, index) => (
                    <Tab
                      iconPosition="start"
                      label={name}
                      value={value}
                      icon={icon}
                      key={`tab-btn-${index}`}
                    />
                  )
                )}
              </S.StyledTabList>
            </Grid>
            <Grid item xs={12} md={9}>
              <S.RightWrapper>
                {Object.values(SIDEBAR_ITEMS).map(({ value, name }, index) => (
                  <S.StyledTabPanel value={value} key={`tab-panel-${index}`}>
                    {name}
                  </S.StyledTabPanel>
                ))}
              </S.RightWrapper>
            </Grid>
          </Grid>
        </TabContext>
      </Container>
    </S.Section>
  );
};

export default Dashboard;
