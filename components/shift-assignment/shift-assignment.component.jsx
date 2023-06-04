import React, { useState, useEffect } from "react";
import * as S from "./shift-assignment.styles";
import { Box, Container, Dialog, Grid } from "@mui/material";
import CustomImage from "../custom-image/custom-image.component";
import ServiceItem from "../service-item/service-item.component";
import parse from "html-react-parser";
import { getActiveModules, placeShift } from "../../lib/uar-api-utils";
import ModuleOptions from "../module-options/module-options.component";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { validateDocId } from "../../lib/utils";

const ShiftAssignment = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const selectedModule = services[serviceIndex];
  const { handleSubmit, setValue } = methods;

  // console.log("selectedModule :>> ", selectedModule);
  const handleSelected = (index) => {
    // console.log("index :>> ", index);
    setServiceIndex(index);
  };

  const handleGetServices = async () => {
    const res = await getActiveModules();
    // console.log("res :>> ", res);
    setServices(res?.data?.modules);
  };

  const onSubmit = async (data) => {
    if (selectedModule?.authRequired && !isOpenDialog) {
      setIsOpenDialog(true);
      return;
    }
    setLoading(true);
    // console.log("data :>> ", data);
    const res = await placeShift(data);
    // console.log("res :>> ", res);
    if (res?.status === "success") {
      // reset();
      setValue("clientId", "");
      setIsOpenDialog(false);
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetServices();
  }, []);

  useEffect(() => {
    setValue("moduleId", selectedModule?._id);
  }, [selectedModule]);

  useEffect(() => {
    setValue("clientId", "");
  }, [isOpenDialog]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} id="shift-assignment-form">
        <S.Section img="/assets/images/shift-assignment.jpg">
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
                            selectedModule?._id === el._id ? "active" : ""
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
                      {parse(
                        selectedModule?.service.description ?? "Sin descripcion"
                      )}
                      <ModuleOptions users={selectedModule?.user} />
                    </S.CurrentService>
                  </Box>
                  <S.StyledBtn type="submit" loading={loading}>
                    Obtener Ticket
                  </S.StyledBtn>
                </S.RightWrapper>
              </Grid>
            </Grid>
          </Container>
        </S.Section>
        <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)}>
          <S.DialogForm>
            <S.DialogTitle>Ingrese su cédula:</S.DialogTitle>
            <CustomInput
              name="clientId"
              autoComplete="off"
              label="Cédula"
              validations={{
                required: true,
                validate: (val) => {
                  if (!validateDocId(val)) {
                    return "Ingrese una cédula válida";
                  }
                },
              }}
            />
            <CustomButton
              type="submit"
              fullWidth
              style={{ marginTop: "1rem" }}
              form="shift-assignment-form"
              loading={loading}
            >
              Ingresar
            </CustomButton>
          </S.DialogForm>
        </Dialog>
      </form>
    </FormProvider>
  );
};

export default ShiftAssignment;
