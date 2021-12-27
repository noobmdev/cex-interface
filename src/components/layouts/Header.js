import { Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import Logo from 'assets/svg/Logo';
import { ColorModeSwitcher } from 'components/common/ColorModeSwitcher';
import CustomLink from 'components/common/CustomLink';
import { headerHeight } from 'constants/styles.constant';
import useColors from 'hooks/useColors';
import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  const { bgPrimaryColor, primaryColor, textPrimaryColor, borderColor } =
    useColors();

  return (
    <HStack
      h={headerHeight}
      borderBottom="0.5px solid"
      borderColor={borderColor}
      px={{ base: '0.5em', md: '1em', xl: '2em' }}
      py="0.5em"
      bg={bgPrimaryColor}
    >
      <Link to="/">
        <Box w="10em" pr="1em">
          <Logo color={primaryColor} />
        </Box>
      </Link>
      <HStack
        flex="1"
        justifyContent={{
          base: 'flex-end',
          md: 'flex-end',
          lg: 'space-between',
          xl: 'space-between',
        }}
        pl="1em"
      >
        <HStack
          d={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
          spacing="8"
          color={textPrimaryColor}
        >
          <CustomLink to="/trade">
            <Text>Exchange</Text>
          </CustomLink>
          <CustomLink to="/buy-crypto">
            <HStack cursor="pointer" _hover role="group">
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
            spacing={4}
            d={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
          >
            <Button size="sm" bg _hover>
              <CustomLink to="/auth/login">
                <Text>Login</Text>
              </CustomLink>
            </Button>
            <Button size="sm" bg={primaryColor} _hover>
              Register
            </Button>
            <Box d={{ base: 'none', md: 'none', xl: 'flex' }}>
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
            </Box>
          </HStack>
          <Icon
            d={{ base: 'block', md: 'block', xl: 'none' }}
            fontSize="4xl"
            cursor="pointer"
            pl="0.25em"
            as={HiOutlineMenu}
          />
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Header;
