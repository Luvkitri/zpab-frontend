import { styled } from '@mui/material/styles';

import { colors } from '@theme/colors';

import { LayoutContainerProps } from './Layout.types';

export const Wrapper = styled('div')<LayoutContainerProps>`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ background }) => background ?? colors.white};
`;

export const HeaderWrapper = styled('div')`
  position: relative;
  width: 100%;
`;
