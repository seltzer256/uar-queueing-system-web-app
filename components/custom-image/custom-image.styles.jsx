import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  //> div {
  //  max-width: 100%;
  //  max-height: 100%;
  //  height: 100% !important;
  //  width: 100% !important;
  //}

  img {
    width: 100%;
    position: relative !important;
    height: unset;
    max-width: 100%;
    max-height: 100%;
  }

  ${({ paddingpercentage }) =>
    paddingpercentage
      ? css`
          height: auto !important;
          padding-top: ${paddingpercentage}%;

          img {
            position: absolute !important;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            //transform: none;
          }
        `
      : css`
          > span {
            position: relative !important;
          }
        `};
`;
