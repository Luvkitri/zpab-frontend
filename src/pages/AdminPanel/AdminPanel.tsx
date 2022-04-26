import { Divider, Typography } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';

import UserService from '@services/User/User.service';

import * as Styled from './AdminPanel.styles';
import {
  AccommodationStatisticsProps,
  UserStatisticsProps,
} from './AdminPanel.types';
import AccommodationService from '@services/Accommodation/Accommodation.service';

const AdminPanel = (): ReactElement => {
  const [userStatistics, setUserStatistics] = useState<UserStatisticsProps>({
    count: 0,
  });
  const [accommodationStatistics, setAccommodationStatistics] =
    useState<AccommodationStatisticsProps>({
      count: 0,
      cities: [],
      citiesCount: {},
      beds: 0,
      citiesBeds: {},
      citiesPets: {},
      citiesAvailableNow: {},
    });

  useEffect(() => {
    const retrieveUserStats = async () => {
      try {
        const response = await UserService.getStats();
        setUserStatistics(response.data);
      } catch (alert) {}
    };

    const retrieveAccommodationStats = async () => {
      try {
        const response = await AccommodationService.getStats();
        console.log(response.data);

        setAccommodationStatistics(response.data);
      } catch (alert) {}
    };

    retrieveUserStats();
    retrieveAccommodationStats();
  }, []);

  return (
    <Styled.Container>
      <Styled.StatsContainer>
        <Typography variant="h4">Accommodations statistics</Typography>
        <div>
          <Typography variant="button">
            Total number of accommodations: {accommodationStatistics.count}
          </Typography>
        </div>
        <div>
          <Typography variant="button">Available cities:</Typography>
          <Styled.CitiesListWrapper>
            {accommodationStatistics.cities.map((city, index) => (
              <Styled.CityListItem key={`city-list-item-${index.toString()}`}>
                {city}
              </Styled.CityListItem>
            ))}
          </Styled.CitiesListWrapper>
        </div>
        <div>
          <Typography variant="button">Cities count:</Typography>
          <Styled.CitiesListWrapper>
            {Object.keys(accommodationStatistics.citiesCount).map(
              (key, index) => (
                <Styled.CityListItem
                  key={`city-count-item-${index.toString()}`}
                >
                  {key}: {accommodationStatistics.citiesCount[key]}
                </Styled.CityListItem>
              ),
            )}
          </Styled.CitiesListWrapper>
        </div>
        <div>
          <Typography variant="button">
            Total number of beds: {accommodationStatistics.beds}
          </Typography>
        </div>
        <div>
          <Typography variant="button">
            Number of available beds in each city:
          </Typography>
          <Styled.CitiesListWrapper>
            {Object.keys(accommodationStatistics.citiesBeds).map(
              (key, index) => (
                <Styled.CityListItem
                  key={`city-pet-count-item-${index.toString()}`}
                >
                  {key}: {accommodationStatistics.citiesBeds[key]}
                </Styled.CityListItem>
              ),
            )}
          </Styled.CitiesListWrapper>
        </div>
        <div>
          <Typography variant="button">Available pets in cities:</Typography>
          <Styled.CitiesListWrapper>
            {Object.keys(accommodationStatistics.citiesPets).map(
              (key, index) => (
                <Styled.CityListItem
                  key={`city-pet-count-item-${index.toString()}`}
                >
                  {key}: {accommodationStatistics.citiesPets[key]}
                </Styled.CityListItem>
              ),
            )}
          </Styled.CitiesListWrapper>
        </div>
        <div>
          <Typography variant="button">Cities available now:</Typography>
          <Styled.CitiesListWrapper>
            {Object.keys(accommodationStatistics.citiesAvailableNow).map(
              (key, index) => (
                <Styled.CityListItem
                  key={`city-pet-count-item-${index.toString()}`}
                >
                  {key}: {accommodationStatistics.citiesAvailableNow[key]}
                </Styled.CityListItem>
              ),
            )}
          </Styled.CitiesListWrapper>
        </div>
      </Styled.StatsContainer>
      <Styled.StatsContainer>
        <Typography variant="h4">Users statistics</Typography>
        <div>
          <Typography variant="button">
            Total number of users: {userStatistics.count}
          </Typography>
        </div>
      </Styled.StatsContainer>
    </Styled.Container>
  );
};

export default AdminPanel;
