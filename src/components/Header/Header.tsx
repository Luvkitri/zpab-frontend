import { Button, Typography } from '@mui/material';
import * as Styled from './Header.styles';
import { useNavigate } from 'react-router-dom';
import { isSignedIn, signOut, getUserEmail, onSignChange } from '@utils/login';
import { render } from 'react-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState(isSignedIn());
  const updateState = () => {
    setSignedIn(isSignedIn());
  };
  onSignChange(updateState);

  const handleSignOutButtonClick = () => {
    signOut();
    navigate('/');
  };
  let buttons: JSX.Element = <b></b>;
  const buttonsSignedIn = (
    <Styled.ButtonsWrapper>
      <Button color="inherit" onClick={handleSignOutButtonClick}>
        Logout {getUserEmail()}
      </Button>
    </Styled.ButtonsWrapper>
  );

  const buttonsAnonymous = (
    <Styled.ButtonsWrapper>
      <Button color="inherit" onClick={() => navigate('/login')}>
        Login
      </Button>
      <Button color="inherit" onClick={() => navigate('/register')}>
        Register
      </Button>
    </Styled.ButtonsWrapper>
  );

  if (signedIn) {
    buttons = buttonsSignedIn;
  } else {
    buttons = buttonsAnonymous;
  }

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
          {buttons}
        </Styled.Toolbar>
      </Styled.AppBar>
    </Styled.Wrapper>
  );
};

export default Header;
