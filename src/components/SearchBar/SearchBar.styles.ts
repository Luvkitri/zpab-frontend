import { styled } from '@mui/material/styles';

import { Button as MuiButton, TextField as MuiTextField } from '@mui/material';

export const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const TextField = styled(MuiTextField)`
  padding-right: 10px;
`;

export const Button = styled(MuiButton)`
  // width: 100px;
`;
