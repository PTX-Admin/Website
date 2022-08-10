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
    heading: 'AvenirNext-Bold, sans-serif',
    body: 'AvenirNext-Bold, sans-serif',
  },
  components: {
    Button: {
      variants: {
        solid: () => ({
          color: 'black',
          background: palette.yellow,
          borderRadius: 'xl',
          transition: '0.3s',
          px: 8,
          py: 6,
          _hover: {
            background: palette.yellowDark,
          },
          _focus: {
            background: palette.yellowDark,
          },
          _active: {
            background: palette.yellowDark,
          },
        }),
      },
    },
  },
  initialColorMode: 'dark',
});
