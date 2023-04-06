import React from "react";
import * as S from "./rhf-error-handler.styles";
import { getRHFErrorMessage } from "../../lib/utils";
import { useFormContext } from "react-hook-form";

const RhfErrorHandler = ({ children, name, rules, className, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = getRHFErrorMessage(errors, name, rules);
  return (
    <S.ComponentWrapper
      className={`${className} ${error ? "error" : ""}`}
      {...props}
    >
      {children}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.ComponentWrapper>
  );
};

export default RhfErrorHandler;
