import React from "react";
import * as S from "./queue-view-item.styles";
import { Grid } from "@mui/material";

const QueueViewItem = ({ code, module, status, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <Grid container>
        <Grid item xs={4}>
          <S.LeftWrapper className="side-wrapper">
            {status && <S.Status className={status} />}
            <S.Name>{code}</S.Name>
          </S.LeftWrapper>
        </Grid>
        <Grid item xs={8}>
          <S.RightWrapper className="side-wrapper">
            <S.Module>{module}</S.Module>
          </S.RightWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default QueueViewItem;
