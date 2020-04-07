import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#ffef64',
      main: '#f9bd2f',
      dark: '#c28d00',
      contrastText: '#000000',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        '&:hover': {
          backgroundColor : '#f9bd2f',
        },
        '&:focus': {
          outline : 'none',
        },
      },
    },
  },
});

export default theme;
