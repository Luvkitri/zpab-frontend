import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)`
  width: 210px;
  height: 56px;
  margin-bottom: 10px;
`;
export const Wrapper = styled('div')`
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
`;