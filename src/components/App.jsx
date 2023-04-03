import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from "../pages/Home";
import { Register } from '../pages/Register';
import { Contacts } from '../pages/Contacts';
import { Login } from '../pages/LogIn';
import { refreshCurrentUser } from 'redux/auth/operations';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { PrivatRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@mui/material/CssBaseline';

export function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch])

return (
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<Register/>}/>}/> 
      <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<Login/>}/>}/>
      <Route path="contacts" element={<PrivatRoute redirectTo="/login" component={<Contacts/>}/>}/>
    </Route>
  </Routes>
  <ToastContainer/>
  <CssBaseline />
  </>
  
)
};
