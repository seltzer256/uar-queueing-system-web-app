import React, { useState } from "react";
import * as S from "./reset-password.styles";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { resetPassword } from "../../lib/uar-api-utils";
import { Alert } from "@mui/material";
import { useRouter } from "next/router";

const ResetPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const { handleSubmit, watch } = methods;

  const onSubmit = async (data) => {
    // console.log("data :>> ", data);
    const token = router.query.token;
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const res = await resetPassword(data.password, data.passwordConfirm, token);

    // console.log("res :>> ", res);
    if (res?.status === "success") {
      setSuccessMessage(
        res?.message ??
          "La contraseña fue restablecida, por favor inicie sesión con su nueva contraseña"
      );
      setIsLoading(false);
      return;
    }
    setErrorMessage(res?.message ?? "Algo salió mal");
    setIsLoading(false);
  };
  return (
    <S.Section>
      <S.Wrapper>
        <FormProvider {...methods}>
          <S.FormWrapper>
            <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
              <S.Title>Restablecer contraseña</S.Title>
              <CustomInput
                name="password"
                label="Contraseña"
                type="password"
                validations={{ required: true }}
              />
              <CustomInput
                name="passwordConfirm"
                label="Confirma contraseña"
                type="password"
                validations={{
                  required: true,
                  validate: (val) => {
                    if (watch("passwordConfirm") !== val) {
                      return "Las contraseñas no coinciden";
                    }
                  },
                }}
              />
              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
              {successMessage && (
                <Alert severity="success">{successMessage}</Alert>
              )}
              <CustomButton
                fullWidth
                type="submit"
                style={{ marginTop: "1rem" }}
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

export default ResetPassword;
