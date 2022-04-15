import { Button, Typography } from '@mui/material';
import * as Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.AppBar position="static">
        <Styled.Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Styled.Toolbar>
      </Styled.AppBar>
    </Styled.Wrapper>
  );
};

export default Header;
