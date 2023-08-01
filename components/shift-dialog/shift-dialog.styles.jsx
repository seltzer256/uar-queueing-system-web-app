import styled from "@emotion/styled";
import { Dialog, IconButton, Typography } from "@mui/material";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    overflow: visible;
  }
`;

export const Wrapper = styled.div`
  padding: 2.5rem 1.75rem;
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const CloseBtn = styled(IconButton)`
  position: absolute;
  top: -3rem;
  right: 0;
  svg {
    color: white;
    width: 36px;
    height: 36px;
  }
`;

export const Title = styled(Typography)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled(Typography)`
  margin-bottom: 1rem;
  font-style: italic;
`;

export const StyledCheckbox = styled(CustomCheckbox)`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  .MuiFormControlLabel-root {
    span {
      font-size: 1.25rem;
      line-height: 2rem;
      font-weight: 500;
    }
  }
`;

export const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const TicketCode = styled(Typography)`
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 700;
`;

export const Service = styled(Typography)`
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 500;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  > div {
    max-width: 120px;
  }
`;
