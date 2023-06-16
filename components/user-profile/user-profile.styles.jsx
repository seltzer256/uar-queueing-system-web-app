import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CustomButton from "../custom-button/custom-button.component";

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 620px;
  width: 100%;
  padding: 2.5rem 0;
`;

export const Title = styled(Typography)`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 100%;
  letter-spacing: 0.15px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.palette.text.content};
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.75rem 0.75rem;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2.25rem 1.5rem;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
`;

export const StyledBtn = styled(CustomButton)`
  padding: 1rem 2rem !important;
  min-height: unset;
  width: 100%;
  margin-top: 3rem;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-color: transparent;
  flex-direction: column;
  padding: 1rem 0;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    padding: 2.5rem 1rem 5rem 1rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 0;
  }
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  max-width: 620px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 620px;
    justify-content: flex-start;
  }
`;

export const LogoutBtn = styled.div`
  font-size: 1.375rem;
  line-height: 1.875rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: ${({ theme }) => theme.palette.text.error};
  margin-top: 2rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: border 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  > div {
    display: flex;
  }
  :hover,
  &.active {
    border: 4px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
