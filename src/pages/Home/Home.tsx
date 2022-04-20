import { FC, useEffect, useState } from 'react';
import { Modal, Typography } from '@mui/material';

import SearchBar from '@components/SearchBar/SearchBar';
import { SelectedUserProps, UserDataProps } from '@services/User/User.types';
import AccommodationService from '@services/Accommodation/Accommodation.service';
import { AccommodationDataProps } from '@services/Accommodation/Accommodation.types';

import * as Styled from './Home.styles';
import AccommodationCard from '@components/AccommodationCard/AccommodationCard';
import DetailsTabs from '@components/DetailsTabs';

const Home: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<SelectedUserProps | null>(
    null,
  );
  const [users, setUsers] = useState<Array<UserDataProps>>([]);
  const [accommodations, setAccommodations] = useState<
    Array<AccommodationDataProps>
  >([]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDetailsButtonClick = (
    firstName: string,
    city: string,
    street: string,
  ) => {
    setSelectedUser({ firstName: firstName, city: city, street: street });
    setIsModalOpen(true);
  };

  const handleSearchButtonClick = async (searchValue: string) => {
    try {
      const searchResults = await AccommodationService.getSearch(searchValue);
      setAccommodations(searchResults.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const initData = async () => {
      try {
        const accommodationsResults = await AccommodationService.getAll();
        setAccommodations(accommodationsResults.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    initData();
  }, []);

  return (
    <>
      <Styled.Wrapper>
        <Styled.TitleWrapper>
          <Typography variant="h5">Search for stuff 🤣</Typography>
        </Styled.TitleWrapper>
        <Styled.SearchBarWrapper>
          <SearchBar
            label="Search for a City/Place"
            handleSearchButtonClick={handleSearchButtonClick}
          />
        </Styled.SearchBarWrapper>
        <Styled.ResultWrapper>
          {accommodations.length === 0 ? (
            <Typography variant="h5">Nothing found 😢</Typography>
          ) : (
            accommodations.map(
              ({
                city,
                street,
                user,
                beds,
                availableFrom,
                availableTo,
                pets,
              }) => (
                <AccommodationCard
                  firstName={user.firstName}
                  city={city}
                  street={street}
                  beds={beds}
                  availableFrom={availableFrom}
                  availableTo={availableTo}
                  pets={pets}
                  handleDetailsButtonClick={handleDetailsButtonClick}
                />
              ),
            )
          )}
        </Styled.ResultWrapper>
      </Styled.Wrapper>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="details-modal"
      >
        <Styled.DetailsModalContainer>
          {selectedUser && (
            <DetailsTabs
              firstName={selectedUser.firstName}
              email={selectedUser.email}
              phoneNumber={selectedUser.phoneNumber}
              city={selectedUser.city}
              street={selectedUser.street}
            />
          )}
        </Styled.DetailsModalContainer>
      </Modal>
    </>
  );
};

export default Home;
