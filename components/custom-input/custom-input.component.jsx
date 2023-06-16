import React from "react";
import * as S from "./custom-input.styles";
import { useFormContext, Controller } from "react-hook-form";
import { getRHFErrorMessage } from "../../lib/utils";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CustomInput = ({
  title,
  name,
  validations,
  label,
  className,
  type = "text",
  variant = "outlined",
  multiline,
  defaultValue = "",
  hideShowPass,
  hideVisibility,
  ...otherProps
}) => {
  const isPassword = type === "password";
  const [visibility, setVisibility] = useState(!isPassword);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = getRHFErrorMessage(errors, name, validations);

  return (
    <S.InputContainer className={className}>
      {title && <S.Title>{title}</S.Title>}
      <Controller
        rules={validations}
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <S.CustomInput
            error={!!error}
            required={!!validations?.required}
            variant={variant}
            label={label}
            helperText={error}
            type={!isPassword ? type : visibility ? "text" : "password"}
            multiline={multiline}
            InputProps={
              isPassword && !hideVisibility
                ? {
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={() => setVisibility(!visibility)}>
                          {visibility ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : null
            }
            {...otherProps}
            {...field}
          />
        )}
      />
    </S.InputContainer>
  );
};

export default CustomInput;
