import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme'; 

import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SearchPage />
    </ThemeProvider>
  );
};

export default App;
