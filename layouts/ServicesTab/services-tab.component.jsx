import React, { useEffect, useState } from "react";
import * as S from "./services-tab.styles";
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  getServices,
  deleteService,
  updateService,
  createService,
} from "../../lib/uar-api-utils";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { toast } from "react-toastify";
import ControlledWysiwyg from "../../components/controlled-wysiwyg/controlled-wysiwyg.component";
import parse from "html-react-parser";
import { textEllipsis } from "../../lib/utils";

const ServicesTab = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);

  const { handleSubmit, reset } = methods;

  const handleGetServices = async () => {
    const res = await getServices();
    // console.log("res :>> ", res);
    setServices(res.data);
  };

  const handleAddNew = () => {
    setSelectedService(null);
    reset({ name: "", description: "" });
  };

  const handleSelectedService = (service) => {
    setSelectedService(service);
    reset({ ...service });
  };

  const onSubmit = async (data) => {
    // console.log("data :>> ", data);
    const patchFn = selectedService ? updateService : createService;
    const res = await patchFn({
      _id: selectedService?._id,
      ...data,
    });

    // console.log("res :>> ", res);
    if (!res || res.status === "error") {
      toast.error("Error al actualizar el servicio");
      return;
    }

    handleSelectedService(res.data.services);
    // console.log("res :>> ", res);
    handleGetServices();
    toast.success(
      selectedService
        ? "Servicio actualizado correctamente"
        : "Servicio creado correctamente"
    );
  };

  const handleDelete = async () => {
    if (confirm("¿Está seguro de eliminar el servicio?")) {
      const res = await deleteService(selectedService._id);
      // console.log("res :>> ", res);
      toast.success("Servicio eliminado correctamente");
      setSelectedService(null);
      reset({ name: "", description: "" });
      handleGetServices();
    }
  };

  useEffect(() => {
    handleGetServices();
  }, []);

  return (
    <S.Wrapper>
      <S.TableWrapper>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Código</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row) => (
              <S.BodyRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleSelectedService(row)}
                className={selectedService?._id === row._id ? "selected" : ""}
              >
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell>{row.code}</TableCell>
              </S.BodyRow>
            ))}
          </TableBody>
        </Table>
      </S.TableWrapper>
      <S.MiddleWrapper>
        <S.AddNewText>
          {selectedService ? <>ID: {selectedService._id}</> : "Nuevo"}
        </S.AddNewText>
        {selectedService && (
          <S.StyledBox>
            <IconButton onClick={handleAddNew}>
              <AddCircleOutlineIcon htmlColor="#0B6706" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon htmlColor="#D32F2F" />
            </IconButton>
          </S.StyledBox>
        )}
      </S.MiddleWrapper>
      <FormProvider {...methods}>
        <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomInput
                name={"name"}
                label={"Nombre"}
                validations={{ required: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                name={"code"}
                label={"Código"}
                validations={{ required: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <ControlledWysiwyg
                name={"description"}
                label={"Descripción"}
                rules={{ required: true }}
              />
            </Grid>
          </Grid>
          <S.BottomWrapper>
            <CustomButton type="submit">Guardar</CustomButton>
          </S.BottomWrapper>
        </S.StyledForm>
      </FormProvider>
    </S.Wrapper>
  );
};

export default ServicesTab;
