import React, { useState, useEffect } from "react";
import * as S from "./queue-view.styles";
import { Container, Grid } from "@mui/material";
import QueueViewItem from "../../components/queue-view-item/queue-view-item.component";
import dynamic from "next/dynamic";
import CustomImage from "../../components/custom-image/custom-image.component";
import { getAllShifts } from "../../lib/uar-api-utils";

const QueueView = ({ bgImage }) => {
  const [shifts, setShifts] = useState([]);
  const currentShift = shifts[0];
  // console.log("title :>> ", title);

  const handleGetShifts = async () => {
    const res = await getAllShifts("/?state=on-hold");
    console.log("res :>> ", res);
    setShifts(res?.data);
  };

  useEffect(() => {
    handleGetShifts();
  }, []);

  return (
    <S.Section img={bgImage}>
      <Container maxWidth="xl">
        <S.ImageWrapper href="/">
          <CustomImage img="/assets/images/espe.png" alt="ESPE logo" />
        </S.ImageWrapper>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {shifts.map((shift) => (
                <Grid item xs={12} key={shift._id}>
                  <QueueViewItem
                    code={shift.code}
                    module={shift.module._id.name}
                    status={shift.state}
                  />
                </Grid>
              ))}
              {/* <Grid item xs={12}>
                <QueueViewItem />
              </Grid>
              <Grid item xs={12}>
                <QueueViewItem />
              </Grid>
              <Grid item xs={12}>
                <QueueViewItem />
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <S.RightWrapper>
              {/* <S.Subtitle>Turno</S.Subtitle> */}
              <S.StyledBox>
                <S.ShiftTitle>{currentShift?.code}</S.ShiftTitle>
                <S.Module>{currentShift?.module._id.name}</S.Module>
              </S.StyledBox>
              <DynamicClock />
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
