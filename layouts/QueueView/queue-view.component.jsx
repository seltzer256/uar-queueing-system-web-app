import React from "react";
import * as S from "./queue-view.styles";
import { Container, Grid } from "@mui/material";
import QueueViewItem from "../../components/queue-view-item/queue-view-item.component";
import dynamic from "next/dynamic";
import CustomImage from "../../components/custom-image/custom-image.component";

const QueueView = ({ bgImage }) => {
  // console.log("title :>> ", title);
  return (
    <S.Section img={bgImage}>
      <Container>
        <S.ImageWrapper>
          <CustomImage img="/assets/images/espe.png" alt="ESPE logo" />
        </S.ImageWrapper>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <QueueViewItem />
              </Grid>
              <Grid item xs={12}>
                <QueueViewItem />
              </Grid>
              <Grid item xs={12}>
                <QueueViewItem />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <S.RightWrapper>
              <S.Subtitle>Turno Actual</S.Subtitle>
              <S.StyledBox>
                <S.ShiftTitle>M12</S.ShiftTitle>
                <S.Module>Module 2</S.Module>
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
