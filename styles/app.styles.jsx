import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyles = (theme) => css`
  img,
  svg {
    max-width: 100%;
  }

  .emphasis {
    color: ${theme.palette.primary.main};
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;

    ${theme.breakpoints.up("md")} {
      font-size: 2.5rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.secondary};
    margin: 0;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

`;

export const LayoutTitle = styled.h2`
  background-color: yellow;
  color: black;
  font-size: 2.5rem;
  font-style: italic;
  text-align: center;
`;

export const AppContainer = styled.main`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.navHeight}px;
  background-color: #f8fdff;
`;
