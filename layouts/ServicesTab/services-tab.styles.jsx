import styled from "@emotion/styled";
import {
  FormControlLabel,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const TableWrapper = styled(TableContainer)`
  overflow: auto;
  max-height: 300px;
  thead {
    th {
      padding: 0.5rem 1rem;
      font-weight: 700;
    }
  }
`;

export const BodyRow = styled(TableRow)`
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover,
  &.selected {
    background-color: rgba(29, 135, 26, 0.1);
  }
`;

export const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const AddNewText = styled(Typography)`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
`;

export const StyledForm = styled.form``;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* * {
    margin: 0;
  } */
`;

export const CheckboxWrapper = styled.div`
  margin-left: 0.75rem;
`;

export const StyledControlLabel = styled(FormControlLabel)`
  svg {
    color: #1c1c1c;
  }
  &.MuiFormControlLabel-root {
    align-items: center;
  }
  .MuiFormControlLabel-label {
    margin-top: 2px;
  }
`;
