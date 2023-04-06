import { Box, FormControlLabel, Grid, Switch } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as S from "./account-tab.styles";
import TrashSvg from "../../public/assets/icons/trash.svg";
import CustomButton from "../custom-button/custom-button.component";

const AccountTab = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <S.Title>Personal Info</S.Title>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <S.StyledBox className="inputs">
                <S.StyledInput label="Full Name" name="full_name" />
                <S.StyledInput label="Username" name="username" />
                <S.StyledInput label="Bio" name="bio" multiline />
              </S.StyledBox>
              <S.UploadImageWrapper>
                <S.ImageThumbnail
                  img="/assets/images/avatar.png"
                  alt="avatar"
                />
                <Box>
                  <S.ButtonsWrapper>
                    <CustomButton className="light">UPLOAD IMAGE</CustomButton>
                    <CustomButton className="light">DELETE</CustomButton>
                  </S.ButtonsWrapper>
                  <S.Description style={{ marginTop: "0.5rem" }}>
                    This will display to others users when they view your posts
                    & profile
                  </S.Description>
                  <S.MaxFileSize>Max size: 1MB</S.MaxFileSize>
                </Box>
              </S.UploadImageWrapper>
              <S.StyledButton>SAVE CHANGES</S.StyledButton>
            </Grid>
          </Grid>
        </S.FormWrapper>
      </FormProvider>
      <FormProvider {...methods}>
        <S.FormWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <S.Title>Login & Security</S.Title>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <S.StyledBox className="inputs">
                <S.StyledInput label="Email" name="email" />
                <S.StyledInput
                  label="Password"
                  name="password"
                  type="password"
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <S.StyledInput
                      label="Repeat Password"
                      name="confirm_password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <S.ChangePassBtn
                    // className="light"
                    >
                      CHANGE PASSWORD
                    </S.ChangePassBtn>
                  </Grid>
                </Grid>
                <S.SwitchWrapper>
                  <S.SwitchTitle>Private Profile</S.SwitchTitle>
                  <FormControlLabel
                    value="top"
                    control={<Switch color="primary" />}
                    label="User can't see the profile"
                    labelPlacement="end"
                  />
                </S.SwitchWrapper>
                <S.SwitchWrapper>
                  <S.SwitchTitle>Receive notification</S.SwitchTitle>
                  <FormControlLabel
                    value="top"
                    control={<Switch color="primary" />}
                    label="asdahsdka kjahsdqw"
                    labelPlacement="end"
                  />
                </S.SwitchWrapper>
              </S.StyledBox>
              <S.StyledButton>SAVE CHANGES</S.StyledButton>
            </Grid>
          </Grid>
        </S.FormWrapper>
      </FormProvider>
      <FormProvider {...methods}>
        <S.FormWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <S.Title>Timezone & Location</S.Title>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <S.StyledBox className="inputs">
                <S.StyledSelect
                  label="Timezone"
                  name="timezone"
                  titleKey="text"
                  placeholder
                  defaultValue=""
                  items={[
                    {
                      value: "Dateline Standard Time",
                      text: "(UTC-12:00) International Date Line West",
                    },
                    {
                      value: "UTC-11",
                      text: "(UTC-11:00) Coordinated Universal Time-11",
                    },
                    {
                      value: "Hawaiian Standard Time",
                      text: "(UTC-10:00) Hawaii",
                    },
                  ]}
                />
                <S.StyledSelect
                  label="Locations"
                  name="location"
                  titleKey="text"
                  placeholder
                  defaultValue=""
                  items={[
                    {
                      value: "Dateline Standard Time",
                      text: "(UTC-12:00) International Date Line West",
                    },
                    {
                      value: "UTC-11",
                      text: "(UTC-11:00) Coordinated Universal Time-11",
                    },
                    {
                      value: "Hawaiian Standard Time",
                      text: "(UTC-10:00) Hawaii",
                    },
                  ]}
                />
              </S.StyledBox>
              <S.StyledButton>SAVE CHANGES</S.StyledButton>
            </Grid>
          </Grid>
        </S.FormWrapper>
      </FormProvider>
      <S.FormWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <S.Title>Danger Zone</S.Title>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <S.Title>Delete Account</S.Title>
            <S.Description>
              This will display to others users when they view your posts &
              profile
            </S.Description>
          </Grid>
          <Grid item xs={12} sm={12} md={3} display="flex">
            <S.DeleteButton>
              <TrashSvg /> DELETE ACCOUNT
            </S.DeleteButton>
          </Grid>
        </Grid>
      </S.FormWrapper>
    </>
  );
};

export default AccountTab;
