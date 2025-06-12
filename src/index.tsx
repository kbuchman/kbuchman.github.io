import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(106, 14, 146, 0.5)',
          padding: '4px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '16px',
          color: 'white',
          transition: 'transform 0.3s ease-in-out, background-color 0.6s ease-in-out',
          ":hover": {
            backgroundColor: 'rgba(106, 14, 146, 0.7)',
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

