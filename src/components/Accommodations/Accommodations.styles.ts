import { styled } from '@mui/material/styles';

import { Button as MuiButton, TextField as MuiTextField } from '@mui/material';


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