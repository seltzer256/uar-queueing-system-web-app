import React from "react";
import CustomInput from "../../components/custom-input/custom-input.component";
import * as S from "./register.styles";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { emailRegexExpression } from "../../lib/utils";
import GoogleSvg from "../../public/assets/icons/google.svg";
import AppleSvg from "../../public/assets/icons/apple.svg";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Checkbox } from "@mui/material";
import CustomLink from "../../components/custom-link/custom-link.component";
import AuthWrapper from "../auth-wrapper/auth-wrapper.component";

const Register = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { handleSubmit, watch, control } = methods;

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <FormProvider {...methods}>
      <AuthWrapper>
        <S.StyledBox className="items" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            validations={{ required: true }}
            name="full_name"
            autoComplete="given_name"
            label="Nombres completos"
          />
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
            autoComplete={"off"}
          />
          <CustomInput
            validations={{
              required: true,
              validate: (val) => {
                if (val !== watch("password")) return "Passwords do not match";
              },
            }}
            name="confirm_password"
            label="Confirmar contraseña"
            type="password"
          />
          <Controller
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
          />
          <CustomButton fullWidth type="submit">
            Registrarse
          </CustomButton>
        </S.StyledBox>
      </AuthWrapper>
    </FormProvider>
  );
};

export default Register;
