import React, { useState } from "react";
import * as S from "./shift-assignment.styles";
import {
  Box,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import CustomImage from "../custom-image/custom-image.component";
import ServiceItem from "../service-item/service-item.component";
import parse from "html-react-parser";
import { Controller } from "react-hook-form";

const ShiftAssignment = ({ bgImage, services }) => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const selectedService = services[serviceIndex];

  const handleSelected = (index) => {
    // console.log("index :>> ", index);
    setServiceIndex(index);
  };

  return (
    <S.Section img={bgImage}>
      <Container maxWidth={"xl"}>
        <S.ImageWrapper href="/">
          <CustomImage img="/assets/images/espe.png" alt="ESPE logo" />
        </S.ImageWrapper>
        <Grid container flex={1}>
          <Grid item xs={12} md={6}>
            <S.Title>Servicios</S.Title>
            <S.ServicesWrapper>
              <Grid container spacing={3}>
                {services?.map((el, index) => (
                  <Grid item xs={12} key={`service-item-${index}`}>
                    <ServiceItem
                      {...el}
                      className={
                        selectedService?.slug === el.slug ? "active" : ""
                      }
                      onClick={() => handleSelected(index)}
                    />
                  </Grid>
                ))}
              </Grid>
            </S.ServicesWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <S.RightWrapper>
              <Box>
                <S.Title>Descripción</S.Title>
                <S.CurrentService>
                  {parse(selectedService?.description ?? "Sin descripcion")}
                  {selectedService?.options && (
                    <>
                      <h3 className="title" style={{ marginBottom: "1rem" }}>
                        Opciones:
                      </h3>
                      <S.StyledOptionGroup>
                        <RadioGroup
                          defaultValue={selectedService?.options[0].slug}
                        >
                          {selectedService?.options.map(
                            ({ name, slug }, index) => (
                              <FormControlLabel
                                value={slug}
                                control={<Radio />}
                                label={name}
                                key={`option-${index}`}
                              />
                            )
                          )}
                        </RadioGroup>
                      </S.StyledOptionGroup>
                    </>
                  )}
                </S.CurrentService>
              </Box>
              <S.StyledBtn>Obtener Ticket</S.StyledBtn>
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Section>
  );
};

export default ShiftAssignment;
