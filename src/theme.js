import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      contrastText: '#ffffffff',
    },
    primary_variant: {
      main: '#166519',
      contrastText: '#ffffffff',
    },
    secondary: {
      main: '#979736',
      contrastText: '#ffffffff',
    },
    secondary_variant: {
      main: '#5a5a15',
      contrastText: '#ffffffff',
    },
    black: {
      main: '#ff000000',
    },
    white: {
      main: '#ffffffff',
    },
    separator: {
      main: '#f4f4f4',
    },
    info: {
      main: '#2196f3'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;