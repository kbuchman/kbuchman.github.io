import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lexend Exa',
      'Roboto',
      'sans-serif',
    ].join(','),
    fontWeightRegular: 300,
    h1: { fontWeight: 300 },
    h2: { fontWeight: 300 },
    h3: { fontWeight: 300 },
    h4: { fontWeight: 300 },
    h5: { fontWeight: 300 },
    h6: { fontWeight: 300 },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(100, 15, 150, 0.5)',
          padding: '4px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '16px',
          color: 'white',
          transition: 'transform 0.3s ease-in-out, background-color 0.6s ease-in-out',
          ':hover': {
            backgroundColor: 'rgba(100, 15, 150, 0.7)',
            transform: 'scale(1.005)',
            transition: 'transform 0.3s ease-in-out, background-color 0.6s ease-in-out',
          },
          display: 'flex'
        }
      }
    },
    MuiStack: {
      defaultProps: {
        gap: 2
      }
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

