import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap:'wrap', 
    ...(isMobile && {
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '0 8px',
      marginTop:'20px',
    }),}}>
      <AccountCircleIcon fontSize="large" color="primary.main" />
      <Typography sx={{ mr: 2 }}>{userName}</Typography>
      <Button
        type="button"
        variant="outlined"
        color="primary"
        sx={{ backgroundColor: 'white', '&:hover': { color: 'white', backgroundColor: 'primary.main' } }}
        onClick={() => dispatch(logout()).then(() => navigate('/'))}
      >
        Logout
      </Button>
    </Box>
  );
};
