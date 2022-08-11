import { extendTheme } from '@chakra-ui/react';
import { palette } from './palette';

export const customTheme = extendTheme({
  colors: {
    progress: {
      100: palette.blue,
      200: palette.blue,
      300: palette.blue,
      400: palette.blue,
      500: palette.blue,
      600: palette.blue,
      700: palette.blue,
      800: palette.blue,
      900: palette.blue,
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  components: {
    Button: {
      variants: {
        solid: () => ({
          color: 'white',
          background: '',
          borderRadius: 'xl',
          transition: '0.3s',
          border: '1px solid red',
          px: 8,
          py: 6,
          _hover: {
            background: '',
            color: 'grey',
          },
          _focus: {
            background: '',
            color: 'grey',
          },
          _active: {
            background: '',
            color: 'grey',
          },
        }),
      },
    },
  },
  initialColorMode: 'dark',
});
