import React, { useState, useEffect, useContext } from "react";
import * as S from "./shifts-tab.styles";
import { changeShiftStatus, getMineShifts } from "../../lib/uar-api-utils";
import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import CustomButton from "../../components/custom-button/custom-button.component";
import { SHIFT_STATUS } from "../../lib/constants";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import socket from "../../lib/socket";
import { AccountContext } from "../../context/account-provider";

const ShiftsTab = () => {
  const { userData } = useContext(AccountContext);
  const [shifts, setShifts] = useState([]);
  const pendingShifts = shifts?.filter(
    ({ state }) => state === SHIFT_STATUS.ON_HOLD
  );
  const completedShifts = shifts?.filter(
    ({ state }) =>
      state === SHIFT_STATUS.CANCELLED || state === SHIFT_STATUS.COMPLETED
  );
  const currentShift = shifts?.find(
    ({ state }) => state === SHIFT_STATUS.IN_PROGRESS
  );

  // console.log("currentShift :>> ", currentShift);
  const handleGetShifts = async () => {
    const res = await getMineShifts();
    // console.log("res :>> ", res);
    setShifts(res?.shifts);
  };

  const handleGetStarted = async () => {
    const shift = pendingShifts[0];
    // console.log("shift :>> ", shift);
    const change = await changeShiftStatus(shift._id, SHIFT_STATUS.IN_PROGRESS);
    // console.log("change :>> ", change);
    handleGetShifts();
  };

  const handleChangeStatus = async (status) => {
    await changeShiftStatus(currentShift._id, status);
    if (pendingShifts.length > 0) {
      await changeShiftStatus(pendingShifts[0]._id, SHIFT_STATUS.IN_PROGRESS);
    }
    // console.log("change :>> ", change);
    handleGetShifts();
  };

  // console.log("shifts :>> ", shifts);
  useEffect(() => {
    handleGetShifts();
    socket.connect();

    socket.on("shiftCreated", (data) => {
      // if (userData._id === data) {
      // console.log("data :>> ", data);
      handleGetShifts();
      // }
    });

    return () => {
      socket.off("shiftCreated");
      socket.disconnect();
    };
  }, []);

  return (
    <S.Wrapper>
      {shifts?.length > 0 ? (
        <>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <S.Title>Pendientes</S.Title>
              <Box maxHeight="300px" overflow="auto">
                <S.ShiftsWrapper>
                  {pendingShifts?.map((shift, index) => (
                    <S.QueueItem
                      key={`pending-shift-${index}`}
                      code={shift.code}
                      module={shift.module?.name}
                      // status={shift.state}
                    />
                  ))}
                  {pendingShifts.length === 0 && (
                    <S.EmptyWrapper>
                      <S.EmptyText>No tiene turnos pendientes</S.EmptyText>
                    </S.EmptyWrapper>
                  )}
                </S.ShiftsWrapper>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <S.Title>Completados</S.Title>
              <Box maxHeight="300px" overflow="auto">
                <S.ShiftsWrapper>
                  {completedShifts?.map((shift, index) => (
                    <S.QueueItem
                      key={`completed-shift-${index}`}
                      code={shift.code}
                      module={shift.module?.name}
                      status={shift.state}
                    />
                  ))}
                  {completedShifts.length === 0 && (
                    <S.EmptyWrapper>
                      <S.EmptyText>No hay turnos completados</S.EmptyText>
                    </S.EmptyWrapper>
                  )}
                </S.ShiftsWrapper>
              </Box>
            </Grid>
          </Grid>
          <S.BottomWrapper>
            {currentShift ? (
              <Box width="100%">
                <S.Title>Turno Actual</S.Title>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <S.QueueItem
                      code={currentShift.code}
                      module={currentShift.module?.name}
                    />
                    {currentShift?.client.name && (
                      <S.ClientName>
                        Nombre: <span>{currentShift?.client.name}</span>
                      </S.ClientName>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <S.ButtonsWrapper>
                      <Tooltip
                        title="Completar turno"
                        enterDelay={500}
                        enterNextDelay={500}
                      >
                        <IconButton
                          onClick={() =>
                            handleChangeStatus(SHIFT_STATUS.COMPLETED)
                          }
                        >
                          <NavigateNextIcon htmlColor="#1D871A" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title="Cancelar turno"
                        enterDelay={500}
                        enterNextDelay={500}
                      >
                        <IconButton
                          onClick={() =>
                            handleChangeStatus(SHIFT_STATUS.CANCELLED)
                          }
                        >
                          <CloseIcon htmlColor="#D32F2F" />
                        </IconButton>
                      </Tooltip>
                    </S.ButtonsWrapper>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <>
                {pendingShifts.length > 0 && (
                  <S.StyledBox
                    style={{ justifyContent: "center", minHeight: "100px" }}
                  >
                    <CustomButton onClick={handleGetStarted}>
                      Empezar
                    </CustomButton>
                  </S.StyledBox>
                )}
              </>
            )}
          </S.BottomWrapper>
        </>
      ) : (
        <>
          <S.EmptyWrapper>
            <S.EmptyText>No tiene turnos asignados</S.EmptyText>
          </S.EmptyWrapper>
        </>
      )}
    </S.Wrapper>
  );
};

export default ShiftsTab;
