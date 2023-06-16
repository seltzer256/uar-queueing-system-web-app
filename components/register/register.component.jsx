import React, { useContext, useState } from "react";
import CustomInput from "../../components/custom-input/custom-input.component";
import * as S from "./register.styles";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { emailRegex } from "../../lib/utils";
import CustomButton from "../../components/custom-button/custom-button.component";
// import { Checkbox } from "@mui/material";
import AuthWrapper from "../auth-wrapper/auth-wrapper.component";
import { AccountContext } from "../../context/account-provider";
import { Alert } from "@mui/material";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const { isAccountLoading, handleSignUp } = useContext(AccountContext);
  const [errorMessage, setErrorMessage] = useState("");
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { handleSubmit, watch, control } = methods;

  const onSubmit = async (data) => {
    // console.log("data :>> ", data);
    const res = await handleSignUp(data);
    if (res?.status === "success") {
      setCookie(null, "jwt", res?.token, {
        maxAge: 15 * 24 * 60 * 60,
        path: "/",
      });
      router.push("/dashboard");
      return;
    }
    setErrorMessage(res?.message);
  };

  return (
    <FormProvider {...methods}>
      <AuthWrapper>
        <S.StyledBox className="items" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            validations={{ required: true }}
            name="name"
            autoComplete="given_name"
            label="Nombres completos"
          />
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
            autoComplete={"off"}
          />
          <CustomInput
            validations={{
              required: true,
              validate: (val) => {
                if (val !== watch("password")) return "Passwords do not match";
              },
            }}
            name="passwordConfirm"
            label="Confirmar contraseña"
            type="password"
          />
          {/* <Controller
            name="accept_terms_and_conditions"
            control={control}
            defaultValue={false}
            render={() => (
              <S.StyledFormLabel
                control={<Checkbox defaultChecked />}
                label={
                  <>
                    He leído y acepto los{" "}
                    <CustomLink url="/terminos-y-condiciones">
                      Terminos y condiciones
                    </CustomLink>
                  </>
                }
              />
            )}
            
          /> */}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <CustomButton fullWidth type="submit" loading={isAccountLoading}>
            Registrarse
          </CustomButton>
        </S.StyledBox>
      </AuthWrapper>
    </FormProvider>
  );
};

export default Register;
