import { FC, useEffect, useState } from 'react';
import { Modal, Typography } from '@mui/material';

import SearchBar from '@components/SearchBar/SearchBar';
import { SelectedUserProps, UserDataProps } from '@services/User/User.types';
import AccommodationService from '@services/Accommodation/Accommodation.service';
import {
  AccommodationDataProps,
  PaginationResponse,
} from '@services/Accommodation/Accommodation.types';

import * as Styled from './Home.styles';
import AccommodationCard from '@components/AccommodationCard/AccommodationCard';
import DetailsTabs from '@components/DetailsTabs';
import { useNavigate } from 'react-router-dom';
import { isAdmin as _isAdmin } from '@utils/login';

const Home: FC = () => {
  const navigate = useNavigate();

  let isAdmin = false;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<SelectedUserProps | null>(
    null,
  );
  const [searchedString, setSearchedString] = useState<string | null>(null);
  const [accommodations, setAccommodations] = useState<PaginationResponse>({
    content: [],
  });

  const [msg, setMsg] = useState('Select city ^');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDetailsButtonClick = (
    firstName: string,
    city: string,
    street: string,
    email: string,
    phoneNumber: string,
  ) => {
    setSelectedUser({
      firstName,
      city,
      street,
      email,
      phoneNumber,
    });
    setIsModalOpen(true);
  };

  const handleSearchButtonClick = async (searchValue: string) => {
    loadAccommodationsPage(searchValue, 0);
    setSearchedString(searchValue);
  };

  const loadAccommodationsPage = async (
    city: string | null,
    pageNumber = 0,
  ) => {
    if (city) {
      try {
        const searchResults = await AccommodationService.getSearch(
          city,
          pageNumber,
        );
        console.log({ searchResults });
        setAccommodations(searchResults.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    try {
      isAdmin = _isAdmin();
    } catch (error) {
      isAdmin = false;
    }

    const initData = async () => {
      try {
        const accommodationsResults = await AccommodationService.getAll();
        setAccommodations(accommodationsResults.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    // initData();
  }, []);

  const onDeleteAccommodation = (id: number) => {
    if (isAdmin) {
      AccommodationService.delete(id)
        .then(() => {
          alert('Accommodation deleted.');
          setAccommodations(accommodations.filter((acc) => acc.id != id));
        })
        .catch(alert);
    }
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.BigButton
          className="btn-grad"
          variant="contained"
          color="info"
          onClick={() => navigate('/add')}
        >
          <Styled.StrongText>Help now!</Styled.StrongText>
          Click here to add your accommodation
        </Styled.BigButton>
        <Styled.TitleWrapper>
          <Typography variant="h5">Find your place</Typography>
        </Styled.TitleWrapper>
        <Styled.SearchBarWrapper>
          <SearchBar
            label="Search for a City"
            handleSearchButtonClick={handleSearchButtonClick}
          />
        </Styled.SearchBarWrapper>
        <Styled.ResultWrapper>
          {accommodations.content.length === 0 ? (
            <>
              <Typography variant="h5">{msg}</Typography>
            </>
          ) : (
            accommodations.content.map(
              (
                {
                  id,
                  city,
                  street,
                  user,
                  beds,
                  availableFrom,
                  availableTo,
                  pets,
                  description,
                },
                index,
              ) => (
                <AccommodationCard
                  onDelete={
                    isAdmin
                      ? () => {
                          if (id != undefined) onDeleteAccommodation(id);
                        }
                      : undefined
                  }
                  key={`accommodation-${index.toString()}`}
                  firstName={user?.firstName ?? ''}
                  city={city}
                  street={street ?? ''}
                  beds={beds}
                  availableFrom={availableFrom}
                  availableTo={availableTo}
                  pets={pets}
                  email={user?.email ?? ''}
                  phoneNumber={user?.phoneNumber ?? ''}
                  description={description}
                  handleDetailsButtonClick={handleDetailsButtonClick}
                />
              ),
            )
          )}
        </Styled.ResultWrapper>

        <>
          {accommodations?.pageable ? (
            <Styled.PaginationWrapper>
              {Array.from(Array(accommodations?.totalPages).keys()).map(
                (pageNumber) => (
                  <Styled.PaginationButton
                    variant={
                      pageNumber == accommodations?.pageable?.pageNumber
                        ? 'contained'
                        : 'outlined'
                    }
                    onClick={() => {
                      loadAccommodationsPage(searchedString, pageNumber);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {pageNumber + 1}
                  </Styled.PaginationButton>
                ),
              )}
            </Styled.PaginationWrapper>
          ) : (
            <></>
          )}
        </>
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
