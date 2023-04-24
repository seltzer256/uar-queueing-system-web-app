import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { darken, lighten } from "@mui/system";

export const CustomButton = styled(LoadingButton)`
  color: white;
  background-color: ${({ theme, color, variation }) =>
    theme.palette[color]
      ? theme.palette[color][variation]
        ? theme.palette[color][variation]
        : theme.palette[color].main
      : theme.palette.primary.main};
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 900;
  border-radius: 8px;
  min-height: 38px;
  line-height: 17px;
  letter-spacing: -0.01em;
  text-transform: none;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.75rem 1.5rem;
  }
  &.light {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }
  &.primary-light {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: white;
    &:hover {
      background-color: ${({ theme }) =>
        darken(theme.palette.primary.light, 0.1)};
    }
  }
  &.dark {
    background-color: ${({ theme }) => theme.palette.text.content};
    color: white;
    &:hover {
      background-color: ${({ theme }) =>
        lighten(theme.palette.text.content, 0.1)};
    }
  }
  &.borderLess {
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &.darkBorder {
    border: 1px solid ${({ theme }) => theme.palette.primary.light};
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }

  &:not(.secondary-light):not(.darkBorder):not(.light):not(
      .borderLess
    ):hover:not(.dark) {
    background-color: ${({ theme, color, variation }) =>
      darken(
        theme.palette[color]
          ? theme.palette[color][variation]
            ? theme.palette[color][variation]
            : theme.palette[color].main
          : theme.palette.primary.main,
        0.1
      )};
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }

  .MuiLoadingButton-loadingIndicator {
    position: static;
  }
  .MuiCircularProgress-svg {
    margin-left: 0;
  }

  .MuiCircularProgress-root {
    width: 22px !important;
    height: 22px !important;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
