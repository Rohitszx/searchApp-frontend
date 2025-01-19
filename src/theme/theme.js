import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff',   
    },
    text: {
      primary: '#333333', 
      secondary: '#555555', 
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', 
    h4: {
      fontWeight: 700, 
    },
    h6: {
      fontWeight: 500, 
    },
  },
  shape: {
    borderRadius: 8, 
  },
});

export default theme;
