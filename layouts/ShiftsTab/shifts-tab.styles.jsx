import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import QueueViewItem from "../../components/queue-view-item/queue-view-item.component";

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

export const QueueItem = styled(QueueViewItem)`
  box-shadow: unset;
  height: auto;
  .MuiGrid-item:last-of-type {
    .side-wrapper {
      border: 1px solid transparent;
    }
  }
  .MuiGrid-item:first-of-type {
    .side-wrapper {
      border-radius: 8px 0px 0px 8px;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
  .side-wrapper {
    padding: 0.5rem 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const ShiftsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

export const BottomWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;

export const StyledBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled(Typography)`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`;
