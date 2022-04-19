import { Button, Typography } from '@mui/material';
import * as Styled from './Header.styles';
import { useNavigate } from 'react-router-dom';
import {
  isSignedIn as _isSignedIn,
  signOut,
  getUserEmail,
  onSignChange,
} from '@utils/login';
import { render } from 'react-dom';
import { useState } from 'react';

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
  let buttons: JSX.Element = <b></b>;
  const renderButtonsSignedIn = () => {
    return (
      <Styled.ButtonsWrapper>
        <Button color="inherit" onClick={handleUsernameButtonClick}>
          {getUserEmail()}
        </Button>
        <Button color="inherit" onClick={handleSignOutButtonClick}>
          Logout
        </Button>
      </Styled.ButtonsWrapper>
    );
  };

  const renderuttonsAnonymous = () => {
    return (
      <Styled.ButtonsWrapper>
        <Button color="inherit" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button color="inherit" onClick={() => navigate('/register')}>
          Register
        </Button>
      </Styled.ButtonsWrapper>
    );
  };

  return (
    <Styled.Wrapper>
      <Styled.AppBar position="static">
        <Styled.Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          {isSignedIn ? renderButtonsSignedIn() : renderuttonsAnonymous()}
        </Styled.Toolbar>
      </Styled.AppBar>
    </Styled.Wrapper>
  );
};

export default Header;
