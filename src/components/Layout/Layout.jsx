import { Outlet, useNavigate } from 'react-router-dom';
/* import { Toaster } from 'react-hot-toast'; */
import { AppBar } from '../UserMenu/AppBar';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logout()).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar onLogout={handleLogout} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <Footer/> 
    </div>
  );
};