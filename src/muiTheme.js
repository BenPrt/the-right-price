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
          backgroundColor: '#f9bd2f',
        },
        '&:focus': {
          outline: 'none',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: '#000000',
        '& svg': {
          fontSize: 32,
        },
        margin: -16,
        '&:focus': {
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      colorSecondary: {
        color: '#FFFFFF',
      },
      sizeSmall: {
        '& svg': {
          fontSize: 24,
        },
      },
    },
    MuiSwitch: {
      thumb: {
        margin: 16,
        
      },
    },
    MuiInput: {
      underline: {
        '&&&&:hover:before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
        },
      },
    },
  },
});

export default theme;
