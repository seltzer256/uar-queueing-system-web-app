import React, { useState, useEffect } from "react";
import * as S from "./queue-view.styles";
import { Container, Grid } from "@mui/material";
import QueueViewItem from "../../components/queue-view-item/queue-view-item.component";
import dynamic from "next/dynamic";
import CustomImage from "../../components/custom-image/custom-image.component";
import { getAllShifts } from "../../lib/uar-api-utils";
import socket from "../../lib/socket";
import { IS_PRODUCTION } from "../../lib/constants";

const QueueView = ({ bgImage }) => {
  const [shifts, setShifts] = useState([]);
  const currentShift = shifts?.length > 0 ? shifts[0] : {};
  // console.log("title :>> ", title);

  const handleGetShifts = async () => {
    const res = await getAllShifts("/today");
    console.log("res :>> ", res);
    setShifts(res?.data ?? []);
  };

  useEffect(() => {
    handleGetShifts();
    socket.connect();

    socket.on("shiftCreated", (data) => {
      handleGetShifts();
      console.log("data :>> ", data);
    });

    socket.on("shiftUpdated", (data) => {
      handleGetShifts();
      console.log("data :>> ", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <S.Section img={bgImage}>
      <Container maxWidth="xl">
        {IS_PRODUCTION ? (
          <CustomImage img="/assets/images/espe.png" alt="ESPE logo" />
        ) : (
          <S.ImageWrapper href="/">
            <CustomImage img="/assets/images/espe.png" alt="ESPE logo" />
          </S.ImageWrapper>
        )}
        <Grid container spacing={8}>
          <Grid
            item
            xs={12}
            md={shifts.length > 0 ? 6 : 0}
            className="left-wrapper"
          >
            <Grid container spacing={3}>
              {shifts.map((shift) => (
                <Grid item xs={12} key={shift._id}>
                  <QueueViewItem
                    code={shift.code}
                    module={shift.module?.code}
                    status={shift.state}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={shifts.length > 0 ? 6 : 12}
            className="right-wrapper"
          >
            <S.RightWrapper>
              {/* <S.Subtitle>Turno</S.Subtitle> */}
              {/* <S.StyledBox>
                <S.ShiftTitle>{currentShift?.code}</S.ShiftTitle>
                <S.Module>{currentShift?.module?.code}</S.Module>
              </S.StyledBox> */}
              <DynamicClock hideBorder={shifts.length === 0} />
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Section>
  );
};

const DynamicClock = dynamic(
  () => import("../../components/queue-clock/queue-clock.component"),
  {
    ssr: false,
  }
);

export default QueueView;
