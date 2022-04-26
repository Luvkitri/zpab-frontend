import { useEffect, useState } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import * as icons from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import {
  isSignedIn as _isSignedIn,
  isAdmin as _isAdmin,
  signOut,
  getUserEmail,
  onSignChange,
} from '@utils/login';

import * as Styled from './Header.styles';

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setSignedIn] = useState(_isSignedIn());
  const [isAdmin, setIsAdmin] = useState(_isAdmin());

  const updateState = () => {
    setSignedIn(_isSignedIn());
    setIsAdmin(_isAdmin());
  };

  onSignChange(updateState);

  const handleUsernameButtonClick = () => {
    navigate('/account');
  };

  const handleAdminButtonClick = () => {
    navigate('/admin');
  };

  const renderButtonsSignedIn = () => {
    return (
      <>
        {isAdmin && (
          <Button
            variant="contained"
            aria-label="admin-panel"
            disableElevation
            onClick={handleAdminButtonClick}
          >
            Admin panel
          </Button>
        )}
        <Button
          variant="contained"
          aria-label="account"
          disableElevation
          onClick={handleUsernameButtonClick}
        >
          <icons.AccountBox />
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
