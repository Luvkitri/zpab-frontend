import { ReactElement } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import PetsIcon from '@mui/icons-material/Pets';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { AccommodationCardProps } from './AccommodationCard.types';
import * as Styled from './AccommodationCard.styles';

const AccommodationCard = ({
  firstName,
  city,
  street,
  beds,
  availableFrom,
  availableTo,
  pets,
  handleDetailsButtonClick = () => {},
}: AccommodationCardProps): ReactElement => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {firstName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={firstName}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardContent>
        <Styled.InfoContainer>
          <Styled.InfoWrapper>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.secondary"
            >
              Availability:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {availableFrom !== null
                ? availableFrom.substring(0, availableFrom.indexOf('T'))
                : new Date().toISOString().substring(0, 10)}{' '}
              -{' '}
              {availableTo !== null
                ? availableTo.substring(0, availableTo.indexOf('T'))
                : '%any'}
            </Typography>
            <EventAvailableIcon color="action" />
          </Styled.InfoWrapper>
          <Styled.InfoWrapper>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.secondary"
            >
              Location:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {city}, {street}
            </Typography>
            <LocationOnIcon color="action" />
          </Styled.InfoWrapper>

          <Styled.InfoWrapper>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.secondary"
            >
              Number of beds:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {beds}
            </Typography>
            <BedIcon color="action" />
          </Styled.InfoWrapper>
          <Styled.InfoWrapper>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.secondary"
            >
              Animals:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {pets ? 'allowed' : 'not allowed'}
            </Typography>
            <PetsIcon color="action" fontSize="small" />
          </Styled.InfoWrapper>
        </Styled.InfoContainer>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => handleDetailsButtonClick(firstName, city, street)}
        >
          See details
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default AccommodationCard;
