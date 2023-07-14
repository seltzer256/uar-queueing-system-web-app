import React, { useState } from "react";
import * as S from "./recover-password.styles";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../custom-input/custom-input.component";
import { emailRegex } from "../../lib/utils";
import CustomButton from "../custom-button/custom-button.component";
import { recoverPassword } from "../../lib/uar-api-utils";
import { Alert } from "@mui/material";

const RecoverPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log("data :>> ", data);
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const res = await recoverPassword(data.email);

    console.log("res :>> ", res);
    if (res?.status === "fail") {
      setErrorMessage(res?.message ?? "Algo salió mal");
      setIsLoading(false);
      return;
    }
    setSuccessMessage(
      res?.message ?? "El correo de recuperación fue enviado a su correo"
    );
    setIsLoading(false);
  };

  return (
    <S.Section>
      <S.Wrapper>
        <FormProvider {...methods}>
          <S.FormWrapper>
            <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
              <S.Title>Recuperar contraseña</S.Title>
              <CustomInput
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
                validations={{ required: true, pattern: emailRegex }}
              />
              {errorMessage && (
                <Alert severity="error" style={{ marginTop: "1rem" }}>
                  {errorMessage}
                </Alert>
              )}
              {successMessage && (
                <Alert severity="success" style={{ marginTop: "1rem" }}>
                  {successMessage}
                </Alert>
              )}
              <CustomButton
                fullWidth
                type="submit"
                style={{ marginTop: "2rem" }}
                loading={isLoading}
              >
                Recuperar
              </CustomButton>
            </S.StyledForm>
          </S.FormWrapper>
        </FormProvider>
      </S.Wrapper>
    </S.Section>
  );
};

export default RecoverPassword;
