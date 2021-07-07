import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box mt="4em">{children}</Box>
    </Box>
  );
};

export default Layout;
