import React, { useEffect, useRef } from "react";
import * as S from "./shift-dialog.styles";
import CustomInput from "../custom-input/custom-input.component";
import { emailRegex } from "../../lib/utils";
import CustomButton from "../custom-button/custom-button.component";
import { Collapse, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import { useFormContext } from "react-hook-form";
import CustomImage from "../custom-image/custom-image.component";

const ShiftDialog = ({
  isOpen,
  setIsOpen,
  authRequired,
  shiftCreated,
  setShiftCreated,
}) => {
  const { watch } = useFormContext();
  const ticketRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
  });
  const handleClose = () => {
    setIsOpen(false);
    setShiftCreated(null);
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
              Tiempo de espera promedio:{" "}
              {Math.floor(shiftCreated?.averageWaitTime)}min
            </Typography>
          </S.TicketWrapper>
        </Collapse>
      </S.Wrapper>
    </S.StyledDialog>
  );
};

export default ShiftDialog;
