import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="register">
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
            mr: 1,
            '&:hover': {
              backgroundColor: 'white',
              color: 'primary.main',
            },
          }}
        >
          Register
        </Button>
      </NavLink>
      <NavLink to="login">
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              backgroundColor: 'white',
              color: 'primary.main',
            },
          }}
        >
          Log In
        </Button>
      </NavLink>
    </div>
  );
};