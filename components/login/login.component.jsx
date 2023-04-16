import React, { useContext } from "react";
import CustomInput from "../custom-input/custom-input.component";
import * as S from "./login.styles";
import { FormProvider, useForm } from "react-hook-form";
import { emailRegexExpression } from "../../lib/utils";
import CustomButton from "../custom-button/custom-button.component";
import { AccountContext } from "../../context/account-provider";
import { useRouter } from "next/router";
import AuthWrapper from "../auth-wrapper/auth-wrapper.component";

const Login = () => {
  const router = useRouter();
  const { handleSignIn } = useContext(AccountContext);
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("data :>> ", data);
    handleSignIn();
    // router.push("/");
  };

  return (
    <FormProvider {...methods}>
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <AuthWrapper>
          <S.StyledBox className="items">
            <CustomInput
              validations={{
                required: true,
                pattern: emailRegexExpression,
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
            <CustomButton fullWidth type="submit">
              Ingresar
            </CustomButton>
          </S.StyledBox>
          <S.ForgotPassword>Olvidó su contraseña?</S.ForgotPassword>
        </AuthWrapper>
      </S.StyledForm>
    </FormProvider>
  );
};

export default Login;
