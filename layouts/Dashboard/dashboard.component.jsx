import React, { useState, useContext, useEffect } from "react";
import * as S from "./dashboard.styles";
import { Container, Grid, Tab } from "@mui/material";
import { SIDEBAR_ITEMS } from "../../lib/constants";
import { TabContext } from "@mui/lab";
import { AccountContext } from "../../context/account-provider";
import ModulesTab from "../ModulesTab/modules-tab.component";
import ServicesTab from "../ServicesTab/services-tab.component";
import ShiftsTab from "../ShiftsTab/shifts-tab.component";
import Spinner from "../../components/spinner/spinner.component";
import AdminDashboard from "../../components/admin-dashboard/admin-dashboard.component";
import UsersTab from "../UsersTab/users-tab.component";

const Dashboard = () => {
  const { isAccountLoading, userData } = useContext(AccountContext);
  const [tabValue, setTabValue] = useState(SIDEBAR_ITEMS.SHIFTS.value);

  const handleChange = (_, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (userData?.role === "admin") {
      setTabValue(SIDEBAR_ITEMS.DASHBOARD.value);
    }
  }, [userData]);

  return (
    <S.Section>
      <Container>
        <TabContext value={tabValue}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <S.StyledTabList onChange={handleChange} orientation="vertical">
                {Object.values(SIDEBAR_ITEMS).map(
                  ({ value, name, icon, onlyAdmin }, index) =>
                    onlyAdmin ? (
                      userData?.role === "admin" && (
                        <Tab
                          iconPosition="start"
                          label={name}
                          value={value}
                          icon={icon}
                          key={`tab-btn-${index}`}
                        />
                      )
                    ) : (
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
                {isAccountLoading ? (
                  <Spinner />
                ) : (
                  <>
                    {userData?.role === "admin" && (
                      <>
                        <S.StyledTabPanel value={SIDEBAR_ITEMS.DASHBOARD.value}>
                          <AdminDashboard />
                        </S.StyledTabPanel>
                        <S.StyledTabPanel value={SIDEBAR_ITEMS.USERS.value}>
                          <UsersTab />
                        </S.StyledTabPanel>
                        <S.StyledTabPanel value={SIDEBAR_ITEMS.MODULES.value}>
                          <ModulesTab />
                        </S.StyledTabPanel>
                        <S.StyledTabPanel value={SIDEBAR_ITEMS.SERVICES.value}>
                          <ServicesTab />
                        </S.StyledTabPanel>
                      </>
                    )}
                    <S.StyledTabPanel value={SIDEBAR_ITEMS.SHIFTS.value}>
                      <ShiftsTab />
                    </S.StyledTabPanel>
                  </>
                )}
              </S.RightWrapper>
            </Grid>
          </Grid>
        </TabContext>
      </Container>
    </S.Section>
  );
};

export default Dashboard;
