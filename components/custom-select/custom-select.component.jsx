import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import * as S from "./custom-select.styles";
import ArrowBottom from "../../public/assets/icons/filter-arrow.svg";
import RhfErrorHandler from "../rhf-error-handler/rhf-error-handler.component";
import { FormHelperText, MenuItem } from "@mui/material";

const CustomSelect = ({
  items,
  defaultValue,
  name,
  isArray,
  valueKey = "value",
  titleKey = "title",
  label,
  rules = { required: true },
  onChange,
  placeholder,
  multiple,
  value,
  ...otherProps
}) => {
  const { control } = useFormContext() ?? { formState: { errors: {} } };

  if (!items) return null;

  const handleChange = (evt, controlledChange) => {
    const value = evt.target.value;
    if (onChange) onChange(value);
    if (controlledChange) controlledChange(value);
  };

  if (!control) {
    return (
      <S.StyledFormControl fullWidth {...otherProps}>
        {label && <S.StyledLabel>{label}</S.StyledLabel>}
        <S.StyledSelect
          IconComponent={ArrowBottom}
          onChange={(evt) => handleChange(evt)}
          defaultValue={defaultValue ? defaultValue : placeholder && ""}
          value={value}
        >
          {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
          {isArray
            ? items.map((item, index) => (
                <MenuItem value={item[valueKey]} key={`menu-${index}`}>
                  {item[titleKey]}
                </MenuItem>
              ))
            : Object.keys(items).map((key, index) => (
                <MenuItem
                  value={items[key][valueKey] ? items[key][valueKey] : key}
                  key={`menu-${index}`}
                >
                  {items[key][titleKey] ? items[key][titleKey] : items[key]}
                </MenuItem>
              ))}
        </S.StyledSelect>
      </S.StyledFormControl>
    );
  }

  return (
    <RhfErrorHandler name={name} rules={rules} {...otherProps}>
      <S.StyledFormControl fullWidth variant="outlined">
        {label && (
          <S.StyledLabel className="input-label">
            {label ? label : placeholder}
            {rules.required && " *"}
          </S.StyledLabel>
        )}
        <Controller
          rules={rules}
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, value, ...others } }) => (
            <S.StyledSelect
              {...others}
              IconComponent={ArrowBottom}
              value={value}
              onChange={(evt) => handleChange(evt, onChange)}
              className="input-container"
              multiple={multiple}
            >
              {placeholder && (
                <MenuItem value="" disabled hidden>
                  {placeholder}
                </MenuItem>
              )}
              {isArray
                ? items.map((item, index) => (
                    <MenuItem value={item[valueKey]} key={`menu-${index}`}>
                      {item[titleKey]}
                    </MenuItem>
                  ))
                : Object.keys(items).map((key, index) => (
                    <MenuItem
                      value={items[key][valueKey] ? items[key][valueKey] : key}
                      key={`menu-${index}`}
                    >
                      {items[key][titleKey] ? items[key][titleKey] : items[key]}
                    </MenuItem>
                  ))}
            </S.StyledSelect>
          )}
        />
      </S.StyledFormControl>
    </RhfErrorHandler>
  );
};

export default CustomSelect;
