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

  const renderButtonsSignedIn = () => {
    return (
      <>
        <Button color="inherit" onClick={handleUsernameButtonClick}>
          {getUserEmail()}
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
          <Button color="inherit" onClick={() => navigate('/')} component="div">
            <Typography variant="h6">FindYourPlace</Typography>
          </Button>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          {isSignedIn ? renderButtonsSignedIn() : renderButtonsAnonymous()}
        </Styled.Toolbar>
      </Styled.AppBar>
    </Styled.Wrapper>
  );
};

export default Header;
