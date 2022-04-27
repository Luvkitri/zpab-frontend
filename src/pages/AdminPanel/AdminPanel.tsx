import { CircularProgress, Divider, Grid, Typography } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
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
  const [loading, setLoading] = useState<boolean>(true);

  const [accommodationStatistics, setAccommodationStatistics] =
    useState<AccommodationStatisticsProps>({
      count: 0,
      cities: [],
      citiesCount: {},
      citiesCountMax: 0,
      beds: 0,
      citiesBeds: {},
      citiesBedsMax: 0,
      citiesPets: {},
      citiesPetsMax: 0,
      citiesAvailableNow: {},
      citiesAvailableNowMax: 0,
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
        let response = await AccommodationService.getStats();

        response.data.citiesCountMax = Number(
          Object.values(response.data.citiesCount).reduce((a, c) =>
            Number(c) > Number(a) ? c : a,
          ),
        );

        response.data.citiesBedsMax = Number(
          Object.values(response.data.citiesBeds).reduce((a, c) =>
            Number(c) > Number(a) ? c : a,
          ),
        );
        response.data.citiesPetsMax = Number(
          Object.values(response.data.citiesPets).reduce((a, c) =>
            Number(c) > Number(a) ? c : a,
          ),
        );
        response.data.citiesAvailableNowMax = Number(
          Object.values(response.data.citiesAvailableNow).reduce((a, c) =>
            Number(c) > Number(a) ? c : a,
          ),
        );

        setAccommodationStatistics(response.data);
      } catch (alert) {}
    };
    Promise.all([retrieveUserStats(), retrieveAccommodationStats()]).then(
      () => {
        setLoading(false);
      },
    );
  }, []);

  return (
    <Styled.Container>
      <Styled.StatsContainer>
        <Typography variant="h4">Accommodations statistics</Typography>
        <Card>
          <CardContent>
            <Typography>
              Total number of accommodations: {accommodationStatistics.count}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="button">Accommodations by city:</Typography>
            <Styled.CitiesListWrapper>
              {loading ? <CircularProgress /> : <></>}

              {Object.keys(accommodationStatistics.citiesCount).map(
                (key, index) => (
                  <Styled.CityListItem
                    key={`city-count-item-${index.toString()}`}
                  >
                    {key}: {accommodationStatistics.citiesCount[key]}
                    <LinearProgress
                      variant="determinate"
                      value={
                        (accommodationStatistics.citiesCount[key] /
                          accommodationStatistics.citiesCountMax) *
                        100
                      }
                    />
                  </Styled.CityListItem>
                ),
              )}
            </Styled.CitiesListWrapper>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="button">
              Total number of beds: {accommodationStatistics.beds}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="button">
              Number of available beds in each city:
            </Typography>
            <Styled.CitiesListWrapper>
              {loading ? <CircularProgress /> : <></>}

              {Object.keys(accommodationStatistics.citiesBeds).map(
                (key, index) => (
                  <Styled.CityListItem
                    key={`city-pet-count-item-${index.toString()}`}
                  >
                    {key}: {accommodationStatistics.citiesBeds[key]}
                    <LinearProgress
                      variant="determinate"
                      color="secondary"
                      value={
                        (accommodationStatistics.citiesBeds[key] /
                          accommodationStatistics.citiesBedsMax) *
                        100
                      }
                    />
                  </Styled.CityListItem>
                ),
              )}
            </Styled.CitiesListWrapper>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="button">
              Accommodations taking in pets:
            </Typography>
            <Styled.CitiesListWrapper>
              {loading ? <CircularProgress /> : <></>}

              {Object.keys(accommodationStatistics.citiesPets).map(
                (key, index) => (
                  <Styled.CityListItem
                    key={`city-pet-count-item-${index.toString()}`}
                  >
                    {key}: {accommodationStatistics.citiesPets[key]}
                    <LinearProgress
                      variant="determinate"
                      color="success"
                      value={
                        (accommodationStatistics.citiesPets[key] /
                          accommodationStatistics.citiesPetsMax) *
                        100
                      }
                    />
                  </Styled.CityListItem>
                ),
              )}
            </Styled.CitiesListWrapper>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="button">
              Accommodations available right now:
            </Typography>
            <Styled.CitiesListWrapper>
              {loading ? <CircularProgress /> : <></>}

              {Object.keys(accommodationStatistics.citiesAvailableNow).map(
                (key, index) => (
                  <Styled.CityListItem
                    key={`city-pet-count-item-${index.toString()}`}
                  >
                    {key}: {accommodationStatistics.citiesAvailableNow[key]}
                    <LinearProgress
                      variant="determinate"
                      color="info"
                      value={
                        (accommodationStatistics.citiesAvailableNow[key] /
                          accommodationStatistics.citiesAvailableNowMax) *
                        100
                      }
                    />
                  </Styled.CityListItem>
                ),
              )}
            </Styled.CitiesListWrapper>
          </CardContent>
        </Card>
      </Styled.StatsContainer>
      <Styled.StatsContainer>
        <Typography variant="h4">Users statistics</Typography>
        <Card>
          <CardContent>
            <Typography variant="button">
              Total number of users: {userStatistics.count}
            </Typography>
          </CardContent>
        </Card>
      </Styled.StatsContainer>
    </Styled.Container>
  );
};

export default AdminPanel;
