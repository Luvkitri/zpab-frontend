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
export const ResultWrapper = styled('div')`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;
export const Hr = styled('hr')`
  width: 300px;
  opacity: 0.5;
`;