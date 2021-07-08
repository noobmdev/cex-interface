import { Box } from '@chakra-ui/react';
import useColors from 'hooks/useColors';
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  const { bgNormalColor } = useColors();

  return (
    <Box bg={bgNormalColor} minH="100vh">
      <Header />
      <Box p26264e26264et="4em">{children}</Box>
    </Box>
  );
};

export default Layout;
