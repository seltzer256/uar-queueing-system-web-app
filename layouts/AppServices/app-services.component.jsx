import React from "react";
import * as S from "./app-services.styles";
import { Grid } from "@mui/material";
import CustomImage from "../../components/custom-image/custom-image.component";

const AppServices = ({ title, services }) => {
  return (
    <S.BgImage img="/assets/images/white-bg.png">
      <S.Section contained>
        <S.Title>{title}</S.Title>
        <Grid container spacing={2} display="flex" justifyContent="center">
          {services?.map(({ title, icon, description, url }, index) => (
            <Grid item xs={12} sm={6} lg={4} key={`service-card-${index}`}>
              <S.ServiceCard url={url}>
                <S.ServiceImg>
                  <CustomImage img={icon} alt={title} />
                </S.ServiceImg>
                <S.ServiceTitle>{title}</S.ServiceTitle>
                <S.ServiceDescription>{description}</S.ServiceDescription>
              </S.ServiceCard>
            </Grid>
          ))}
        </Grid>
      </S.Section>
    </S.BgImage>
  );
};

export default AppServices;
