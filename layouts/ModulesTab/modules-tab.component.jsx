import React, { useEffect, useState } from "react";
import * as S from "./modules-tab.styles";
import {
  Checkbox,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  createModule,
  deleteModule,
  getModules,
  getServices,
  getUsers,
  updateModule,
} from "../../lib/uar-api-utils";
import { Controller, FormProvider, useForm } from "react-hook-form";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomSelect from "../../components/custom-select/custom-select.component";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { toast } from "react-toastify";

const ModulesTab = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      service: "",
      user: [],
      name: "",
      code: "",
      active: true,
      authRequired: false,
      enableChoose: false,
    },
  });
  const [selectedModule, setSelectedModule] = useState(null);
  const [modules, setModules] = useState([]);
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);

  const { handleSubmit, reset, control } = methods;
  // console.log("modules :>> ", modules);

  const handleGetModules = async () => {
    const res = await getModules();
    // console.log("res :>> ", res);
    setModules(res?.data);
  };

  const handleGetServices = async () => {
    const res = await getServices();
    // console.log("res :>> ", res);
    setServices(res?.data);
  };

  const handleGetUsers = async () => {
    const res = await getUsers();
    // console.log("res :>> ", res);
    setUsers(res?.data);
  };

  const handleAddNew = () => {
    setSelectedModule(null);
    reset({ service: "", user: [], name: "", code: "" });
  };

  const handleSelectedModule = (module, justCreated) => {
    setSelectedModule(module);
    const userIds = module.user.map((user) => (justCreated ? user : user._id));
    // console.log("userIds :>> ", userIds);
    reset({
      ...module,
      service: justCreated ? module.service : module.service._id,
      user: userIds,
    });
  };

  const onSubmit = async (data) => {
    // console.log("data :>> ", data);
    const patchFn = selectedModule ? updateModule : createModule;
    const res = await patchFn({
      _id: selectedModule?._id,
      ...data,
    });
    // console.log("res :>> ", res);
    handleSelectedModule(res.data.modules, !!!selectedModule);
    handleGetModules();
    toast.success(
      selectedModule
        ? "Modulo actualizado correctamente"
        : "Modulo creado correctamente"
    );
  };

  const handleDelete = async () => {
    if (confirm("¿Está seguro de eliminar el módulo?")) {
      const res = await deleteModule(selectedModule._id);
      // console.log("res :>> ", res);
      toast.success("Módulo eliminado correctamente");
      setSelectedModule(null);
      reset({ service: "", user: [], name: "", code: "" });
      handleGetModules();
    }
  };

  useEffect(() => {
    handleGetModules();
    handleGetServices();
    handleGetUsers();
  }, []);

  return (
    <S.Wrapper>
      <S.TableWrapper>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Código</TableCell>
              <TableCell>Usuarios</TableCell>
              <TableCell>Servicio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modules?.map((row) => (
              <S.BodyRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleSelectedModule(row)}
                className={selectedModule?._id === row._id ? "selected" : ""}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th">{row.code}</TableCell>
                <TableCell component="th">
                  {row.user.map((user, index) => (
                    <React.Fragment key={user._id}>
                      {user.name}
                      {index < row.user.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </TableCell>
                <TableCell component="th">{row.service?.name}</TableCell>
              </S.BodyRow>
            ))}
          </TableBody>
        </Table>
      </S.TableWrapper>
      <S.MiddleWrapper>
        <S.AddNewText>
          {selectedModule ? <>ID: {selectedModule._id}</> : "Nuevo"}
        </S.AddNewText>
        {selectedModule && (
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
            <Grid item xs={12} sm={6}>
              <CustomInput
                name={"name"}
                label={"Nombre"}
                validations={{ required: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput
                name={"code"}
                label={"Código"}
                validations={{ required: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                name={"service"}
                label={"Servicio"}
                rules={{ required: true }}
                items={services}
                titleKey="name"
                valueKey="_id"
                placeholder="Seleccione un servicio"
                // isArray
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                name={"user"}
                label={"Usuario(s)"}
                rules={{ required: true }}
                items={users}
                titleKey="name"
                valueKey="_id"
                multiple
                placeholder="Seleccione uno o más usuarios"
                // isArray
              />
            </Grid>
            <Grid item xs={4}>
              <S.CheckboxWrapper>
                <Controller
                  name="active"
                  control={control}
                  // defaultValue={true}
                  render={({ field: { value, onChange } }) => (
                    <S.StyledControlLabel
                      control={<Checkbox checked={value} onChange={onChange} />}
                      label="Activo"
                    />
                  )}
                />
              </S.CheckboxWrapper>
            </Grid>
            <Grid item xs={4}>
              <S.CheckboxWrapper>
                <Controller
                  name="authRequired"
                  control={control}
                  // defaultValue={false}
                  render={({ field: { value, onChange } }) => (
                    <S.StyledControlLabel
                      control={<Checkbox checked={value} onChange={onChange} />}
                      label="Requiere autenticación"
                    />
                  )}
                />
              </S.CheckboxWrapper>
            </Grid>
            <Grid item xs={4}>
              <S.CheckboxWrapper>
                <Controller
                  name="enableChoose"
                  control={control}
                  // defaultValue={false}
                  render={({ field: { value, onChange } }) => (
                    <S.StyledControlLabel
                      control={<Checkbox checked={value} onChange={onChange} />}
                      label="Habilitar escoger"
                    />
                  )}
                />
              </S.CheckboxWrapper>
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

export default ModulesTab;
