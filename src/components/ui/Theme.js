import {createTheme} from '@material-ui/core';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

const theme = createTheme({
    palette: {
      common: {
        blue: arcBlue,
        orange: arcOrange,
      },
      primary: {
        main: arcBlue,
      },
      secondary: {
        main: arcOrange
      },

    },
    typography: {
      tab: {
        fontFamily: 'Raleway',
        textTransform: 'none',
        fontWeight: '700',
        fontSize: '1rem',
      },
      estimate:{
        fontFamily: 'Pacifico',
        fontSize: '1rem',
        textTransform: 'none',
      }
    }
  }
);

export default theme;