import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ConfirmationEmail from './components/ConfirmationEmail';

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFA500',
      },
      secondary: {
        main: '#FF7043',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConfirmationEmail />
    </ThemeProvider>
  );
};

export default App;
