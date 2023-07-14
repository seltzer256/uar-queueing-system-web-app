import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

export const Section = styled.section`
  background: ${({ theme }) => theme.palette.text.light};
  height: 80vh;
  min-height: 600px;
  max-height: 1000px;
`;

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const FormWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.text.content};
  border-radius: 8px;
  padding: 4rem 2rem;
  max-width: 950px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled(Typography)`
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const StyledForm = styled.form`
  max-width: 600px;
  width: 100%;
`;
