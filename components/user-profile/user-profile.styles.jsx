import styled from "@emotion/styled";
import { Container, Tabs, Typography } from "@mui/material";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const TabsWrapper = styled(Tabs)`
  min-height: unset;

  .MuiTabs-scroller {
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
  }
  .MuiTab-root {
    color: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 1rem 0.75rem 1rem;
    min-height: unset;
    &.Mui-selected {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  .MuiTabs-indicator {
    background-color: ${({ theme }) => theme.palette.primary.main};
    height: 3px;
    bottom: 0px;
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 1rem;
  width: 100%;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &.name {
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
  &.fields {
    margin-bottom: 1.5rem;
    gap: 2rem;
  }
`;

export const Name = styled(Typography)`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.625rem;
  letter-spacing: 0.15px;
`;

export const Nick = styled(Typography)`
  font-size: 1.5rem;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.palette.tertiary.dark};
`;

export const Field = styled(Typography)`
  font-size: 1.25rem;
  line-height: 100%;
  letter-spacing: 0.15px;
`;

export const Description = styled(Typography)`
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.palette.text.secondary};
  max-width: 564px;
  margin-bottom: 1.5rem;
`;

export const Feature = styled.div`
  font-weight: 600;
  font-size: 2rem;
  line-height: 100%;
  letter-spacing: 0.15px;
  padding: 0.5rem;
  span {
    font-size: 1.25rem;
    line-height: 100%;
  }
`;

export const PanelsWrapper = styled.div`
  /* padding-top: 1.5rem;
  border-top: 1px solid #eeeeee; */
  .MuiTabPanel-root {
    padding: 0;
  }
  &.fullwidth {
    width: 100%;
  }
`;
