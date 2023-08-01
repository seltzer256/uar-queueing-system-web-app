import React, { useState, useEffect } from "react";
import * as S from "./shift-assignment.styles";
import { Box, Container, Grid } from "@mui/material";
import CustomImage from "../custom-image/custom-image.component";
import ServiceItem from "../service-item/service-item.component";
import parse from "html-react-parser";
import { getActiveServices, placeShift } from "../../lib/uar-api-utils";
import ModuleOptions from "../module-options/module-options.component";
import { FormProvider, useForm } from "react-hook-form";
import socket from "../../lib/socket";
import { toast } from "react-toastify";
import ShiftDialog from "../shift-dialog/shift-dialog.component";

const ShiftAssignment = () => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      printTicket: false,
    },
  });
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [shiftCreated, setShiftCreated] = useState(null);

  const selectedService = services[serviceIndex];
  const { handleSubmit, setValue } = methods;

  // console.log("selectedService :>> ", selectedService);
  const handleSelected = (index) => {
    // console.log("index :>> ", index);
    setServiceIndex(index);
  };

  const handleGetServices = async () => {
    const res = await getActiveServices();
    // console.log("res :>> ", res);
    setServices(res?.data?.services);
  };

  const onSubmit = async (data) => {
    // console.log("data :>> ", data);
    setLoading(true);
    // setIsOpenDialog(false);

    data.serviceId = selectedService._id;

    let isAvailableService = false;
    selectedService?.users?.map((user) => {
      if (user?.isAvailable) {
        isAvailableService = true;
      }
    });

    if (!isAvailableService) {
      toast.error("Servicio no disponible");
      setLoading(false);
      return;
    }

    const selectedUser = selectedService?.users?.find(
      (el) => el._id === data.userId
    );

    // console.log("selectedUser :>> ", selectedUser);
    if (selectedService?.chooseRequired && !selectedUser?.isAvailable) {
      toast.error("Encargado no disponible");
      setLoading(false);
      return;
    }
    // console.log("data :>> ", data);
    const shiftRes = await placeShift(data);
    // console.log("shiftRes :>> ", shiftRes);
    if (shiftRes?.status === "success") {
      toast.success("Turno creado correctamente");
      setValue("clientName", "");
      setValue("clientEmail", "");
      setShiftCreated(shiftRes.shift);
      // setIsOpenDialog(false);
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetServices();
    socket.connect();

    socket.on("changeAvailability", () => {
      // console.log("data :>> ", data);
      handleGetServices();
    });

    return () => {
      socket.off("changeAvailability");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (selectedService?.chooseRequired) {
      setValue("userId", selectedService?.users[0]?._id);
      return;
    }
    setValue("userId", "");
  }, [selectedService]);

  useEffect(() => {
    setValue("clientName", "");
    setValue("clientEmail", "");
  }, [isOpenDialog]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} id="shift-assignment-form">
        <S.Section img="/assets/images/shift-assignment.jpg">
          <Container maxWidth={"xl"} sx={{ alignItems: "flex-start" }}>
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
                            selectedService?._id === el._id ? "active" : ""
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
                      {selectedService?.chooseRequired && (
                        <ModuleOptions users={selectedService?.users} />
                      )}
                    </S.CurrentService>
                  </Box>
                  <S.StyledBtn
                    loading={loading}
                    onClick={() => setIsOpenDialog(true)}
                  >
                    Obtener Ticket
                  </S.StyledBtn>
                </S.RightWrapper>
              </Grid>
            </Grid>
          </Container>
        </S.Section>
        <ShiftDialog
          authRequired={selectedService?.authRequired}
          isOpen={isOpenDialog}
          setIsOpen={setIsOpenDialog}
          shiftCreated={shiftCreated}
          setShiftCreated={setShiftCreated}
        />
      </form>
    </FormProvider>
  );
};

export default ShiftAssignment;
