import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import React from 'react';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { NotificationsProvider } from '@mantine/notifications';

const theme = extendTheme({
  /** DEFAULT TYPOGRAPHY
     * https://chakra-ui.com/docs/styled-system/theme#typography
    fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
    },
     */

  layerStyles: {
    frontpage: {
      h1: {
        fontSize: ['xl'],
        textAlign: ['center', 'center', 'center', 'center', 'left'],
        marginBottom: '1rem',
        marginTop: '2rem',
      },
      h2: {
        fontSize: ['4xl', '5xl', '2.75rem'],
        fontWeight: 'semibold',
        textAlign: ['center', 'center', 'center', 'center', 'left'],
        marginBottom: '2rem',
      },
      h3: {
        fontSize: ['3xl', '2.75rem'],
        textAlign: ['center', 'center', 'center', 'center', 'left'],
      },
      p: {
        fontSize: ['md'],
        textAlign: ['center', 'center', 'center', 'center', 'left'],
        marginBottom: '2rem',
      },
      li: {
        fontSize: ['lg', 'xl', '2xl'],
        fontStyle: 'italic',
        fontWeight: 'thin',
        textAlign: ['center', 'center', 'center', 'center', 'left'],
        marginBottom: '1rem',
        marginLeft: '1rem',
      },
      a: {
        // marginBottom: '10rem',
      },
    },
    // AUDITING - ACCOUNTING --> PAGES
    aa: {
      h1: {
        fontSize: ['4xl', '6xl', '8xl'],
        fontWeight: '500',
      },
      li: {
        marginLeft: '20px',
      },
    },
    career: {
      h2: {},
    },
    testimonials: {
      h4: {
        fontSize: ['36px', '48px', '72px'],
      },
      p: {
        fontSize: ['md'],

        marginTop: '2rem',
      },
    },
    news: {
      h1: {
        fontSize: ['36px', '48px', '72px'],
      },
    },

    markdown: {
      h1: {
        fontSize: ['4xl', '5xl'],
        marginTop: '2rem',
      },
      h2: {
        fontSize: ['3xl'],
        fontWeight: 'thin',
        marginTop: '2rem',
      },
      h3: {
        fontSize: ['3xl'],
        marginTop: '3rem',
      },
      p: {
        fontSize: ['md'],
        marginTop: '2rem',
        marginBottom: '2rem',
      },
    },

    markdownCareer: {
      h1: {
        fontSize: ['3xl', '3rem'],
        marginBottom: '1rem',
      },
    },
  },

  colors: {
    // https://chakra-ui.com/docs/styled-system/theme
    brand: {
      mainColor: '#ff6600',
      altColor: '#fafafa',
      black: 'rgb(48,53,60)',
      lightText: '#718096', // gray.500
      text: '#2D3748', // gray.700
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
