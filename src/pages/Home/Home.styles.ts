import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const TitleWrapper = styled('div')`
  margin: 0 0 24px 0;
`;

export const SearchBarWrapper = styled('div')`
  width: 60%;
`;

export const ResultWrapper = styled('div')`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
