import { AppBar as MuiAppBar, Toolbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const AppBar = ({ onLogout }) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isLoggedIn = useSelector(selectIsLoggedIn);
      
    return (
      <MuiAppBar sx={{ backgroundColor: 'primary.main', color: 'white', position: isMobile ? 'relative' : 'static',
      marginLeft: isMobile ? '-16px' : '0px', width:  isMobile ? '111%' : '100%'}}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            ...(isMobile && {
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: '0 15px',
              paddingBottom: '20px',
              paddingTop: '10px',
            }),
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu onLogout={onLogout} /> : <AuthNav />}
        </Toolbar>
      </MuiAppBar>
    );
  };