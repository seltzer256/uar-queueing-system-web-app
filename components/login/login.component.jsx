import React, { useContext } from "react";
import CustomInput from "../custom-input/custom-input.component";
import * as S from "./login.styles";
import { FormProvider, useForm } from "react-hook-form";
import { emailRegexExpression } from "../../lib/utils";
import GoogleSvg from "../../public/assets/icons/google.svg";
import AppleSvg from "../../public/assets/icons/apple.svg";
import CustomButton from "../custom-button/custom-button.component";
import { AccountContext } from "../../context/account-provider";
import { useRouter } from "next/router";

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
    router.push("/");
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
                hideShowPass
              />
              <CustomButton fullWidth type="submit">
                LOG IN
              </CustomButton>
            </S.StyledBox>
            <S.ForgotPassword>Forgot password</S.ForgotPassword>
            <S.StyledBox className="items">
              <S.LoginWithBtn className="dark">
                <GoogleSvg />
                Log in with google
              </S.LoginWithBtn>
              <S.LoginWithBtn className="dark">
                <AppleSvg />
                Log in with apple
              </S.LoginWithBtn>
            </S.StyledBox>
          </S.StyledBox>
        </S.Card>
      </FormProvider>
    </S.Wrapper>
  );
};

export default Login;
