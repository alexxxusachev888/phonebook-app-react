import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import { theme } from "utils/theme";
import { ThemeProvider} from '@mui/material/styles';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/phonebook-app-react'>
        <ThemeProvider theme={theme}>
          <App />
          </ThemeProvider>
        </BrowserRouter>  
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
