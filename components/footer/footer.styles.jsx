import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  color: white;
  padding: 4em 0 0;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
  }
`;
