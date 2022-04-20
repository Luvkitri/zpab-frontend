import { useState } from 'react';
import { Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {
  isSignedIn as _isSignedIn,
  signOut,
  getUserEmail,
  onSignChange,
} from '@utils/login';

import * as Styled from './Header.styles';

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setSignedIn] = useState(_isSignedIn());

  const updateState = () => {
    setSignedIn(_isSignedIn());
  };
  
  onSignChange(updateState);

  const handleUsernameButtonClick = () => {
    navigate('/account');
  };

  const handleSignOutButtonClick = () => {
    signOut();
    navigate('/');
  };

  const renderButtonsSignedIn = () => {
    return (
      <>
        <Button color="inherit" onClick={handleUsernameButtonClick}>
          {getUserEmail()}
        </Button>
        <Button color="inherit" onClick={handleSignOutButtonClick}>
          Logout
        </Button>
      </>
    );
  };

  const renderButtonsAnonymous = () => {
    return (
      <>
        <Button color="inherit" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button color="inherit" onClick={() => navigate('/register')}>
          Register
        </Button>
      </>
    );
  };

  return (
    <Styled.Wrapper>
      <Styled.AppBar position="fixed">
        <Styled.Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FindYourPlace
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          {isSignedIn ? renderButtonsSignedIn() : renderButtonsAnonymous()}
        </Styled.Toolbar>
      </Styled.AppBar>
    </Styled.Wrapper>
  );
};

export default Header;
