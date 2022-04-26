import { styled } from '@mui/material/styles';

import {
  Button as MuiButton,
  TextField as MuiTextField,
  Card as MuiCard,
} from '@mui/material';

export const ResultWrapper = styled('div')`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Button = styled(MuiButton)`
  width: 200px;
`;

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  minheight: 30px;

  & > span :first-child {
    margin-right: 4px;
  }
`;
