import React from "react";
import * as S from "./queue-view-item.styles";
import { Grid } from "@mui/material";

const QueueViewItem = () => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs={4}>
          <S.LeftWrapper>
            <S.Name>M13</S.Name>
          </S.LeftWrapper>
        </Grid>
        <Grid item xs={8}>
          <S.RightWrapper>
            <S.Module>Module 2</S.Module>
          </S.RightWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default QueueViewItem;
