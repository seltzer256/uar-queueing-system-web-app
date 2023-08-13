import React, { useEffect, useState } from "react";
import * as S from "./users-tab.styles";
import {
  Fade,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  getUsers,
  updateUser,
  signUp,
  deleteUser,
} from "../../lib/uar-api-utils";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { toast } from "react-toastify";
import CheckIcon from "@mui/icons-material/Check";
import CustomCheckbox from "../../components/custom-checkbox/custom-checkbox.component";

const UsersTab = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      active: true,
      isAvailable: true,
    },
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const { handleSubmit, reset } = methods;

  const handleGetUsers = async () => {
    const res = await getUsers();
    // console.log("res :>> ", res);
    setUsers(res.data);
  };

  const handleAddNew = () => {
    setSelectedUser(null);
    reset({ user: "", email: "" });
  };

  const handleSelectedUser = (user) => {
    setSelectedUser(user);
    reset({ ...user });
  };

  const onSubmit = async (data) => {
    const patchFn = selectedUser ? updateUser : signUp;

    if (!selectedUser) {
      data.passwordConfirm = data.password;
    } else {
      delete data.password;
    }

    const res = await patchFn({
      _id: selectedUser?._id,
      ...data,
    });
    // console.log("data :>> ", data);

    // console.log("res :>> ", res);
    if (!res || res.status === "error") {
      toast.error("Error al actualizar el usuario");
      return;
    }

    handleSelectedUser(res.data.users);
    // console.log("res :>> ", res);
    handleGetUsers();
    toast.success(
      selectedUser
        ? "Usuario actualizado correctamente"
        : "Usuario creado correctamente"
    );
  };

  const handleDelete = async () => {
    if (confirm("¿Está seguro de eliminar el usuario?")) {
      const res = await deleteUser(selectedUser._id);
      // console.log("res :>> ", res);
      toast.success("Usuario eliminado correctamente");
      setSelectedUser(null);
      reset({ user: "", email: "" });
      handleGetUsers();
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <S.Wrapper>
      <S.TableWrapper>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Activo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <S.BodyRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleSelectedUser(row)}
                className={selectedUser?._id === row._id ? "selected" : ""}
              >
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.active && <CheckIcon />}</TableCell>
              </S.BodyRow>
            ))}
          </TableBody>
        </Table>
      </S.TableWrapper>
      <S.MiddleWrapper>
        <S.AddNewText>
          {selectedUser ? <>ID: {selectedUser._id}</> : "Nuevo"}
        </S.AddNewText>
        {selectedUser && (
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
                data-test={"user-name"}
                validations={{ required: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                name={"email"}
                label={"Email"}
                data-test={"user-email"}
                validations={{ required: true }}
              />
            </Grid>
            <Fade in={!!!selectedUser} mountOnEnter unmountOnExit>
              <Grid item xs={12}>
                <CustomInput
                  name={"password"}
                  label={"Contraseña"}
                  data-test={"user-password"}
                  type="password"
                  validations={{ required: true }}
                />
              </Grid>
            </Fade>
            <Grid item xs={4}>
              <CustomCheckbox name="active" label="Activo" />
            </Grid>
            <Grid item xs={4}>
              <CustomCheckbox name="isAvailable" label="Disponible" />
            </Grid>
          </Grid>
          <S.BottomWrapper>
            <CustomButton type="submit" data-test="user-btn-save">
              Guardar
            </CustomButton>
          </S.BottomWrapper>
        </S.StyledForm>
      </FormProvider>
    </S.Wrapper>
  );
};

export default UsersTab;
