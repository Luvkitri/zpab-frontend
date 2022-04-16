import { Button, Typography } from '@mui/material';
import * as Styled from './Header.styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

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
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate('/register')}>
            Register
          </Button>
        </Styled.Toolbar>
      </Styled.AppBar>
    </Styled.Wrapper>
  );
};

export default Header;
