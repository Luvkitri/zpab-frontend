import { styled } from '@mui/material/styles';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Button as MuiButton, TextField as MuiTextField } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  max-width: 800px;
  min-width: 320px;
  margin: 0 auto;
`;

export const TitleWrapper = styled('div')`
  margin: 24px 0 24px 0;
`;

export const SearchBarWrapper = styled('div')`
  width: 100%;
`;

export const ResultWrapper = styled('div')`
  width: 100%;
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
export const BigButton = styled(ButtonUnstyled)`
  height: 72px;
  font-size: inherit;
`;
export const StrongText = styled('strong')`
  padding-right: 0.5rem;
`;

export const PaginationWrapper = styled('div')``;
export const PaginationButton = styled(MuiButton)``;
