import { Box } from '@chakra-ui/react';
import useColors from 'hooks/useColors';
import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  const { primaryColor } = useColors();

  return (
    <Link to={to}>
      <Box
        _hover={{
          color: primaryColor,
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default CustomLink;
