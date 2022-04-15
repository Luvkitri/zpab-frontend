import { styled } from '@mui/material/styles';

export const Wrapper = styled('nav')`
  position: sticky;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: aliceblue;
  z-index: 10;
`;

export const ContentWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const GroupWrapper = styled('div')`
  display: flex;
`;
