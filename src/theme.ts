import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: 'dark', // Set initial color mode to dark
        // Disable system color mode detection
    },
    colors: {
        gray: {
            50: '#f9fafb',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111',
        },
    },
});

export default theme;
