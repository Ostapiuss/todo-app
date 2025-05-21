import { alpha, createTheme, responsiveFontSizes } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    primaryLight: Palette['primary'];
    blueLight: Palette['primary'];
    grayLight: Palette['primary'];
    whiteButton: Palette['primary'];
    previewButtons: Palette['primary'];
  }

  interface PaletteOptions {
    primaryLight?: PaletteOptions['primary'];
    blueLight?: PaletteOptions['primary'];
    grayLight?: PaletteOptions['primary'];
    whiteButton?: PaletteOptions['primary'];
    previewButtons?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primaryLight: true;
    blueLight: true;
    grayLight: true;
    whiteButton: true;
    previewButtons: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#0DB6AB',
      light: '#5CD1C9',
      dark: '#0A7B74',
    },
    primaryLight: {
      main: '#7C66EB1A',
      contrastText: '#0DB6AB',
    },
    previewButtons: {
      main: '#F8FAFC',
      contrastText: '#24252C',
    },
    blueLight: {
      main: '#44BDFF1A',
      contrastText: '#485068',
    },
    grayLight: {
      main: '#F8FAFC',
      contrastText: '#24252C',
    },
    whiteButton: {
      main: '#FFFFFFB2',
      contrastText: '#0DB6AB',
    },
    secondary: {
      main: '#DF156A',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFF',
    },
    error: {
      main: '#ED2F00',
      light: '#FDEAE6',
    },
    success: {
      main: '#60BA62',
      light: '#60BA621A',
      contrastText: '#fff',
    },
    warning: {
      main: '#F5B805',
      light: '#FFF9ED',
    },
    action: {
      // disabled: '#F3F3F5',
    },
    common: {
      black: '#2A2828',
    },
    text: {
      primary: '#24252C',
      secondary: '#98A1AA',
    },
    grey: {
      '50': '#98a1aa',
      '100': '#F2F3F3',
      '200': '#8F91A5',
      '700': '#596072',
      '800': '#485068',
    },
  },
  typography: {
    fontFamily: '\'Inter\', sans-serif',
    h1: {
      fontSize: '1.875rem',
      fontStyle: 'normal',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.625rem',
      fontStyle: 'normal',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.375rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    caption: {
      fontSize: '0.875rem',
    },
    subtitle1: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: 'large' },
          style: { height: 52 },
        },
        {
          props: { size: 'small' },
          style: { height: 44 },
        },
        {
          props: { color: 'grayLight' },
          style: {
            // ':hover': {
            //   backgroundColor: '#7C66EB1A',
            //   color: '#0DB6AB',
            //   svg: {
            //     stroke: '#0DB6AB',
            //   },
            // },
          },
        },
        {
          props: { color: 'grayLight' },
          style: {
            fontSize: 14,
            borderRadius: '6px',
            ':hover': {
              backgroundColor: '#7C66EB1A',
              color: '#0DB6AB',
              svg: {
                stroke: '#0DB6AB',
              },
            },
          },
        },
        {
          props: { color: 'previewButtons' },
          style: {
            fontSize: 14,
            borderRadius: '6px',
            color: '#485068',
            svg: {
              stroke: '#485068',
            },
            ':hover': {
              backgroundColor: '#7C66EB1A',
              color: '#0DB6AB',
              svg: {
                stroke: '#0DB6AB',
              },
            },
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#F3F3F5',
            color: '#98A1AA80',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          lineHeight: '1.3rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiFilledInput-root': {
            height: '52px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#E1E1FF',
          },
          '&.Mui-error': {
            backgroundColor: '#FDEAE6',
          },
          '&.Mui-disabled': {
            backgroundColor: '#F3F3F5',
          },
        },
      },
    },
    MuiFilledInput: {
      variants: [
        {
          props: { size: 'medium' },
          style: { height: 54 },
        },
      ],
      styleOverrides: {
        root: ({ theme }) => ({
          overflow: 'hidden',
          borderRadius: 4,
          backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#1A2027',
          border: '1px solid',
          borderColor: theme.palette.mode === 'light' ? '#E1E1FF' : '#2D3843',
          transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-error': {
            backgroundColor: '#FDEAE6',
            borderColor: theme.palette.error.main,
            boxShadow: `${alpha(theme.palette.error.main, 0.25)} 0 0 0 2px`,
          },
          '&.Mui-disabled': {
            backgroundColor: '#F3F3F5',
          },
        }),
      },
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            color: '#485068',
          },
        },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { square: false },
          style: { borderRadius: 12 },
        },
      ],
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: 0,
          // color: 'gray',
          // bgcolor: '#98A1AA1A',
          // color: 'text.secondary',
        },
      },
      defaultProps: {
        sx: {
          bgcolor: '#98A1AA1A',
          color: 'text.secondary',
        },
      },
    },
    MuiFormHelperText: {
      variants: [
        {
          props: { variant: 'filled' },
          style: { marginLeft: 0 },
        },
      ],
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 8,
          // width: 48,
          height: 40,
        },
        switchBase: {
          color: '#98A1AA',
        },
        track: {
          borderRadius: 29 / 2,
          backgroundColor: '#98A1AA80',
          '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
          },
          '&:before': {
            left: 12,
          },
          '&:after': {
            right: 12,
          },
        },
        thumb: {
          boxShadow: 'none',
          width: 16,
          height: 16,
          margin: 3,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
