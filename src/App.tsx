import { ThemeProvider } from '@mui/material';
import React from 'react';
import defaultTheme from './config/theme/Default';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RoutesApp from './routes/RoutesApp';
import { persistor, store } from './store/store';
import GStyles from './config/GlobalStyles';

function App() {
  

  return (
    <>
     <Provider store={store}>
      <PersistGate persistor={persistor}>
          <GStyles/>
          <RoutesApp />
      
      </PersistGate>
     </Provider>
     
      
    </>
  )
}

export default App
