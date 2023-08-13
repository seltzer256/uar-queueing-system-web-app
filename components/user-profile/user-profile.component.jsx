import React, { useEffect, useContext } from "react";
import * as S from "./user-profile.styles";
import { Grid } from "@mui/material";
import CustomInput from "../custom-input/custom-input.component";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { emailRegex } from "../../lib/utils";
import { AccountContext } from "../../context/account-provider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomImage from "../custom-image/custom-image.component";
import { AVATAR_URLS } from "../../lib/constants";
import { updatePassword } from "../../lib/uar-api-utils";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

const Summary = () => {
  const {
    userData,
    setIsAccountLoading,
    handleSignOut,
    handleSignIn,
    avatar,
    isAccountLoading,
    updateUser,
  } = useContext(AccountContext);
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  // console.log("userData :>> ", userData);
  const { handleSubmit, reset, setError, control } = methods;

  const onSubmit = async (data) => {
    // console.log("data :>> ", data);
    if (data.newPassword && !data.currentPassword) {
      setError("currentPassword", {
        type: "required",
        message: "Este campo es requerido",
      });
      return;
    }
    setIsAccountLoading(true);
    if (data.currentPassword && data.newPassword) {
      const authRes = await handleSignIn(data.email, data.currentPassword);

      // console.log("authRes :>> ", authRes);

      if (!authRes || authRes?.status === "fail") {
        setError("currentPassword", {
          type: "required",
          message: "Contraseña incorrecta",
        });
        return;
      }

      const updatePass = await updatePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        newPasswordConfirm: data.newPassword,
      });

      setCookie(null, "jwt", updatePass?.token, {
        maxAge: 15 * 24 * 60 * 60,
        path: "/",
      });

      // console.log("updatePass :>> ", updatePass);

      toast.success("Contraseña actualizada!");
      // console.log("authRes :>> ", authRes);
    }
    // data.password = data.new_password;
    // console.log("data :>> ", data);
    await updateUser(data);
    setIsAccountLoading(false);
    toast.success("Información actualizada!");
  };

  useEffect(() => {
    // console.log("userData :>> ", userData);
    if (!userData) return;
    reset({
      ...userData,
    });
  }, [userData]);

  return (
    <FormProvider {...methods}>
      <S.StyledForm id="information-form" onSubmit={handleSubmit(onSubmit)}>
        <S.Section>
          <S.Title>Avatar</S.Title>
          <Grid container spacing={2}>
            <Controller
              name="photo"
              control={control}
              defaultValue={avatar}
              render={({ field: { value, onChange } }) => (
                <>
                  {Object.values(AVATAR_URLS).map((avatar, index) => (
                    <Grid item xs={1.5} key={`avatar-${index}`}>
                      <S.AvatarWrapper
                        onClick={() => onChange(avatar)}
                        className={value === avatar ? "active" : ""}
                      >
                        <CustomImage img={avatar} alt="avatar" />
                      </S.AvatarWrapper>
                    </Grid>
                  ))}
                </>
              )}
            />
          </Grid>
        </S.Section>
        <S.Section>
          <S.Title>Información</S.Title>
          <S.InputsWrapper>
            <Grid container rowSpacing={4} columnSpacing={2}>
              <Grid item xs={12}>
                <CustomInput
                  validations={{ required: true }}
                  autoComplete="given-name"
                  name="name"
                  label="Nombre"
                  inputProps={{
                    "data-test": "profile-name",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomInput
                  validations={{ required: true, pattern: emailRegex }}
                  name="email"
                  autoComplete="email"
                  disabled
                  label="Email"
                />
              </Grid>
            </Grid>
          </S.InputsWrapper>
        </S.Section>
        <S.Section>
          <S.Title>Cambiar contraseña</S.Title>
          <S.InputsWrapper>
            <Grid container rowSpacing={4} columnSpacing={2}>
              <Grid item xs={12} sm={6}>
                <CustomInput
                  name="currentPassword"
                  label="Contraseña actual"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomInput
                  name="newPassword"
                  label="Nueva contraseña"
                  type="password"
                />
              </Grid>
            </Grid>
          </S.InputsWrapper>
          <S.StyledBtn
            type="submit"
            form="information-form"
            loading={isAccountLoading}
            data-test="profile-btn-save"
          >
            Guardar
          </S.StyledBtn>
          <S.LogoutBtn onClick={handleSignOut}>
            <ArrowBackIcon />
            Salir
          </S.LogoutBtn>
        </S.Section>
      </S.StyledForm>
    </FormProvider>
  );
};

export default Summary;
