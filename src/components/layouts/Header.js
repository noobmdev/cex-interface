import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import Logo from 'assets/svg/Logo';
import { ColorModeSwitcher } from 'components/common/ColorModeSwitcher';
import CustomLink from 'components/common/CustomLink';
import useColors from 'hooks/useColors';
import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  const { bgPrimaryColor, primaryColor, textPrimaryColor, borderColor } =
    useColors();

  return (
    <HStack
      h="4em"
      borderBottom="0.5px solid"
      borderColor={borderColor}
      px={{ base: '0.5em', md: '1em', lg: '2em' }}
      py="0.5em"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      bg={bgPrimaryColor}
    >
      <Link to="/">
        <Box w="10em" pr="1em">
          <Logo color={primaryColor} />
        </Box>
      </Link>
      <HStack
        flex="1"
        pl="1em"
        borderLeft="1px solid"
        borderColor={borderColor}
        justifyContent="space-between"
      >
        <HStack spacing="8" color={textPrimaryColor}>
          <CustomLink to="/trade">
            <Text>Exchange</Text>
          </CustomLink>
          <CustomLink to="/buy-crypto">
            <HStack
              cursor="pointer"
              _hover={
                {
                  // color: 'blue.700',
                }
              }
              role="group"
            >
              <Text>Buy Crypto</Text>
              <Icon
                style={{
                  marginLeft: 0,
                }}
                fontSize="2xl"
                as={MdArrowDropDown}
                _groupHover={{
                  transform: 'rotate(180deg)',
                  transition: '.3s all',
                }}
              />
            </HStack>
          </CustomLink>
          <CustomLink to="/markets">
            <Text>Markets</Text>
          </CustomLink>
          <CustomLink to="/discover">
            <Text>Discover</Text>
          </CustomLink>
        </HStack>
        <HStack>
          <HStack
            cursor="pointer"
            _hover={{
              color: primaryColor,
            }}
            role="group"
          >
            <Text>EN/USD</Text>
            <Icon
              style={{
                marginLeft: 0,
              }}
              fontSize="2xl"
              as={MdArrowDropDown}
              _groupHover={{
                transform: 'rotate(180deg)',
                transition: '.3s all',
              }}
            />
          </HStack>
          <ColorModeSwitcher />
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Header;
