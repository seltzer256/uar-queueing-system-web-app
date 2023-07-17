import React from "react";
import * as S from "./custom-checkbox.styles";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@mui/material";

const CustomCheckbox = ({ name, label, ...others }) => {
  const { control } = useFormContext();
  return (
    <S.Wrapper {...others}>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <S.StyledControlLabel
            control={<Checkbox checked={value} onChange={onChange} />}
            label={label}
          />
        )}
      />
    </S.Wrapper>
  );
};

export default CustomCheckbox;
