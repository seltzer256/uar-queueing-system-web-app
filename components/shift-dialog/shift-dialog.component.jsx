import React, { useEffect, useRef, useState } from "react";
import * as S from "./shift-dialog.styles";
import CustomInput from "../custom-input/custom-input.component";
import { emailRegex } from "../../lib/utils";
import CustomButton from "../custom-button/custom-button.component";
import { Box, Collapse, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import { useFormContext } from "react-hook-form";
import CustomImage from "../custom-image/custom-image.component";
import KeyboardReact from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
// import { useFormContext } from "react-hook-form";

const ShiftDialog = ({
  isOpen,
  setIsOpen,
  authRequired,
  shiftCreated,
  setShiftCreated,
}) => {
  const { watch, setValue } = useFormContext();
  const ticketRef = useRef(null);
  const [keyboardInput, setKeyboardInput] = useState(null);
  const [keyboardState, setKeyboardState] = useState("default");
  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
  });
  const handleClose = () => {
    setIsOpen(false);
    setShiftCreated(null);
    setKeyboardInput(null);
  };

  const handleFocusInput = (evt) => {
    const name = evt.target.name;

    // console.log("evt :>> ", evt);
    setKeyboardInput(name);
  };

  const handleKeyboard = (evt) => {
    console.log("evt :>> ", evt);
    setValue(keyboardInput, evt);
  };

  const onKeyPress = (button) => {
    // console.log("button :>> ", button);
    const formValue = watch(keyboardInput);

    if (button === "{shift}") {
      setKeyboardState(keyboardState === "default" ? "shift" : "default");
      return;
    }
    if (button === "{bksp}") {
      setValue(keyboardInput, formValue.slice(0, -1));
      return;
    }
    if (button === "{space}") {
      setValue(keyboardInput, formValue + " ");
      return;
    }
    setValue(keyboardInput, formValue + button);
    setKeyboardState("default");
  };

  useEffect(() => {
    if (shiftCreated && watch("printTicket")) {
      handlePrint();
    }
  }, [shiftCreated]);

  return (
    <S.StyledDialog open={isOpen} onClose={handleClose}>
      <S.Wrapper>
        <S.CloseBtn onClick={handleClose}>
          <Close />
        </S.CloseBtn>
        <Collapse in={!!!shiftCreated}>
          {authRequired && (
            <Stack spacing={2}>
              <S.Title>Ingrese su nombre:</S.Title>
              <CustomInput
                name="clientName"
                autoComplete="off"
                label="Nombre"
                validations={{
                  required: true,
                }}
                onFocus={handleFocusInput}
              />
              <S.Title>Ingrese su correo institucional:</S.Title>
              <CustomInput
                name="clientEmail"
                autoComplete="off"
                label="Email"
                type="email"
                validations={{
                  required: true,
                  pattern: emailRegex,
                }}
                onFocus={handleFocusInput}
              />
            </Stack>
          )}
          <S.StyledCheckbox
            name="printTicket"
            label="¿Desea Imprimir su ticket?"
          />
          {!authRequired && !watch("printTicket") && (
            <>
              <S.Title style={{ marginTop: "1rem" }}>
                Ingrese su correo:
              </S.Title>
              <CustomInput
                name="clientEmail"
                autoComplete="off"
                label="Email"
                type="email"
                validations={{
                  required: true,
                  pattern: emailRegex,
                }}
                style={{ marginBottom: "1rem" }}
                onFocus={handleFocusInput}
                // onBlur={handleBlurInput}
              />
            </>
          )}
          <S.Subtitle>
            Si no desea imprimir su ticket recuerde que será enviado un correo
            con la información.
          </S.Subtitle>
          <CustomButton
            type="submit"
            fullWidth
            style={{ marginTop: "1rem" }}
            form="shift-assignment-form"
          >
            Obtener
          </CustomButton>
          <Collapse in={!!keyboardInput}>
            <Box sx={{ marginTop: "1rem" }}>
              <KeyboardReact
                // onChange={handleKeyboard}
                onKeyPress={onKeyPress}
                layoutName={keyboardState}
                layout={{
                  default: [
                    "1 2 3 4 5 6 7 8 9 0 {bksp}",
                    "q w e r t y u i o p",
                    "a s d f g h j k l ñ",
                    "{shift} z x c v b n m . {shift}",
                    "@gmail.com @espe.edu.ec @outlook.com",
                    ".com @ {space}",
                  ],
                  shift: [
                    "1 2 3 4 5 6 7 8 9 0 {bksp}",
                    "Q W E R T Y U I O P",
                    "A S D F G H J K L Ñ",
                    "{shift} Z X C V B N M . {shift}",
                    "@gmail.com @espe.edu.ec @outlook.com",
                    ".com @ {space}",
                  ],
                }}
              />
            </Box>
          </Collapse>
        </Collapse>
        <Collapse in={!!shiftCreated}>
          <S.TicketWrapper ref={ticketRef}>
            {/* <S.Title>Ticket</S.Title> */}
            <S.LogoWrapper>
              <CustomImage img="/assets/images/espe-logo.jpg" alt="ESPE logo" />
            </S.LogoWrapper>
            <S.TicketCode>{shiftCreated?.code}</S.TicketCode>
            <S.Service>{shiftCreated?.service?.name}</S.Service>
            <Typography sx={{ textAlign: "center" }}>
              Clientes en espera: {shiftCreated?.waiting} <br />
              {shiftCreated?.averageWaitTime > 0 && (
                <>
                  Tiempo de espera promedio:{" "}
                  {Math.floor(shiftCreated?.averageWaitTime)}min
                </>
              )}
            </Typography>
          </S.TicketWrapper>
        </Collapse>
      </S.Wrapper>
    </S.StyledDialog>
  );
};

export default ShiftDialog;
