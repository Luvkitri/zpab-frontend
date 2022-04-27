import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 24px;
  
  
`;
export const GridContainer = styled('div')`
  max-width:800px;

  
  
`;

export const StatsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 12px;

  & > div {
    border: 1px solid black;
    padding: 8px;
    margin-bottom: 8px;
  }
`;

export const CitiesListWrapper = styled('ul')``;

export const CityListItem = styled('li')`
padding-top:0.5rem;`;
