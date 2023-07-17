import React, { useState, useEffect } from "react";
import * as S from "./module-options.styles";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const ModuleOptions = ({ users = [] }) => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    if (users[0]?.isAvailable) {
      setValue("userId", users[0]?._id);
    }
  }, [users]);

  // console.log("users :>> ", users);
  if (!users?.length) return null;

  return (
    <>
      <S.Title>{users.length > 1 ? "Encargados:" : "Encargado:"}</S.Title>
      <Controller
        name="userId"
        defaultValue={users[0]?._id}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <S.StyledOptionGroup>
            <RadioGroup {...field}>
              {users.map(({ name, _id, isAvailable }, index) => (
                <FormControlLabel
                  value={_id}
                  control={<Radio />}
                  disabled={!isAvailable}
                  label={
                    isAvailable ? (
                      name
                    ) : (
                      <>
                        <span className="name">{name}</span>
                        <span
                          style={{ color: "#D32F2F" }}
                          className="unavailable"
                        >
                          no disponible
                        </span>
                      </>
                    )
                  }
                  key={`option-${index}`}
                />
              ))}
            </RadioGroup>
          </S.StyledOptionGroup>
        )}
      />
    </>
  );
};

export default ModuleOptions;
