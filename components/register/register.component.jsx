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
    <S.Wrapper>
      <S.BgImage img="/assets/images/login-bg.png" alt="BMW M5" />
      <FormProvider {...methods}>
        <S.Card onSubmit={handleSubmit(onSubmit)}>
          <S.StyledBox>
            <S.Title>BMW Community</S.Title>
            <S.Subtitle>
              Maxwell's equations—the foundation of classical
              electromagnetism—describe light as a wave that moves with a
              characteristic velocity.
            </S.Subtitle>
            <S.StyledBox className="items">
              <CustomInput
                validations={{ required: true }}
                name="full_name"
                autoComplete="given_name"
                label="Full Name"
              />
              <CustomInput
                validations={{
                  required: true,
                  pattern: emailRegexExpression,
                }}
                name="email"
                autoComplete="email"
                label="Email Address"
              />
              <CustomInput
                validations={{
                  required: true,
                  minLength: 8,
                }}
                name="password"
                label="Password"
                type="password"
                autoComplete={"off"}
              />
              <CustomInput
                validations={{
                  required: true,
                  validate: (val) => {
                    if (val !== watch("password"))
                      return "Passwords do not match";
                  },
                }}
                name="confirm_password"
                label="Confirm Password"
                type="password"
              />
              <CustomInput
                validations={{ required: true }}
                name="car_model"
                label="Card Model"
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
                        I accept the{" "}
                        <CustomLink>Terms and conditions</CustomLink>
                      </>
                    }
                  />
                )}
              />
              <CustomButton fullWidth type="submit">
                SIGN UP
              </CustomButton>
              <S.LoginWithBtn className="dark">
                <GoogleSvg />
                Sign In with google
              </S.LoginWithBtn>
              <S.LoginWithBtn className="dark">
                <AppleSvg />
                Sign In with apple
              </S.LoginWithBtn>
            </S.StyledBox>
          </S.StyledBox>
        </S.Card>
      </FormProvider>
    </S.Wrapper>
  );
};

export default Register;
