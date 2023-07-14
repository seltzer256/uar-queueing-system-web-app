import React, { useContext, useState } from "react";
import CustomInput from "../custom-input/custom-input.component";
import * as S from "./login.styles";
import { FormProvider, useForm } from "react-hook-form";
import { emailRegex } from "../../lib/utils";
import CustomButton from "../custom-button/custom-button.component";
import { AccountContext } from "../../context/account-provider";
import { useRouter } from "next/router";
import AuthWrapper from "../auth-wrapper/auth-wrapper.component";
import { Alert } from "@mui/material";
import { setCookie } from "nookies";

const Login = () => {
  const router = useRouter();
  const { handleSignIn, isAccountLoading } = useContext(AccountContext);
  const [errorMessage, setErrorMessage] = useState("");
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    const res = await handleSignIn(data.email, data.password);
    if (res?.status === "fail") {
      setErrorMessage(res?.message);
      return;
    }
    setCookie(null, "jwt", res?.token, {
      maxAge: 15 * 24 * 60 * 60,
      path: "/",
    });
    router.push("/dashboard");
  };

  return (
    <FormProvider {...methods}>
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <AuthWrapper>
          <S.StyledBox className="items">
            <CustomInput
              validations={{
                required: true,
                pattern: emailRegex,
              }}
              name="email"
              autoComplete="email"
              label="Email"
            />
            <CustomInput
              validations={{
                required: true,
                minLength: 8,
              }}
              name="password"
              label="Contraseña"
              type="password"
              hideShowPass
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <CustomButton fullWidth type="submit" loading={isAccountLoading}>
              Ingresar
            </CustomButton>
          </S.StyledBox>
          <S.ForgotPassword url="/forgot-password">
            Olvidó su contraseña?
          </S.ForgotPassword>
        </AuthWrapper>
      </S.StyledForm>
    </FormProvider>
  );
};

export default Login;
