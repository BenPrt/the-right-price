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
        textTransform: 'none',
        '&:hover': {
          backgroundColor : '#f9bd2f',
        },
        '&:focus': {
          outline : 'none',
        },
      },
    },
    MuiIconButton: {
      root: {
        '&:focus': {
          outline : 'none',
        },
      },
      colorSecondary: {
        color: '#FFFFFF',
      },
    },
  },
});

export default theme;
