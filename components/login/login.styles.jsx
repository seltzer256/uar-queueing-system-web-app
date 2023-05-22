import styled from "@emotion/styled";
import CustomButton from "../custom-button/custom-button.component";
import CustomLink from "../custom-link/custom-link.component";

export const StyledForm = styled.form`
  flex: 1;
  display: flex;
`;

export const StyledBox = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  &.items {
    gap: 1rem;
  }
`;

export const ForgotPassword = styled(CustomLink)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem("13")};
  line-height: 1.375rem;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.38);
  margin-top: 0.75rem;
  margin-bottom: 2.25rem;
  transition: color 0.3s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const LoginWithBtn = styled(CustomButton)`
  width: 100%;
  gap: 0.75rem;
  text-transform: uppercase;
`;
