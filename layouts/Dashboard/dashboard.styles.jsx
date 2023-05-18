import styled from "@emotion/styled";
import { TabList, TabPanel } from "@mui/lab";

export const Section = styled.section`
  padding: 2.5rem 0;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  flex: 1;
`;

export const StyledTabList = styled(TabList)`
  .MuiTabs-flexContainer {
    gap: 1rem;
    padding: 1rem;
  }
  .MuiSvgIcon-root {
    width: 32px;
    height: 32px;
  }
  .MuiTab-root {
    text-transform: none;
    font-size: 1rem;
    line-height: 1.5rem;
    min-height: 48px;
    box-shadow: 2px 2px 20px rgba(0, 0, 63, 0.12);
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.text.light};
    &.Mui-selected {
      color: ${({ theme }) => theme.palette.text.light};
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;

export const RightWrapper = styled.div`
  padding: 1rem;
`;

export const StyledTabPanel = styled(TabPanel)`
  /* box-shadow: 2px 2px 20px rgba(0, 0, 63, 0.12); */
  background-color: ${({ theme }) => theme.palette.text.light};
  /* border-radius: 8px; */
`;
