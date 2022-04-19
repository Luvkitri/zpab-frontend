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
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export const DetailsModalContainer = styled('div')`
  background-color: white;
  width: 100vh;
  height: 80vh;
  padding: 10px;
  margin: 100px auto;
  border-radius: 5px;
`;
