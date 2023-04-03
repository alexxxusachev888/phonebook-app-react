import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Typography, Box} from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
      <NavLink Link to="/">
        <Typography variant="h6" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography variant="h6" sx={{ textDecoration: 'none', color: 'white' }}>
            Contacts
          </Typography>
        </NavLink>
      )}
    </Box>
  );
};
