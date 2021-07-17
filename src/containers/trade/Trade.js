import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { headerHeight } from 'constants/styles.constant';
import useColors from 'hooks/useColors';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc';
import { FaBitcoin } from 'react-icons/fa';
import { fluctuationsColors } from 'constants/styles.constant';
import KLineChart from 'components/trade/KLineChart';

const Trade = () => {
  const {
    bgPrimaryColor,
    bgSubPrimaryColor,
    bgNormalColor,
    primaryColor,
    textNormalColor,
  } = useColors();

  return (
    <Box>
      <Grid
        p="1em"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} bg={bgPrimaryColor}>
          <Box>
            <HStack justify="space-between" p="1em">
              <Button size="sm" bg={primaryColor} _hover>
                <Text>BTC</Text>
              </Button>
              <Button size="sm" bg _hover _focus _active>
                <Text>ETH</Text>
              </Button>
              <Button size="sm" bg _hover _focus _active>
                <Text>USDT</Text>
              </Button>
            </HStack>
            <Box px="1em">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <Icon
                      fontSize="2xl"
                      as={FiSearch}
                      color={textNormalColor}
                    />
                  }
                />
                <Input border="none" bg={bgNormalColor} placeholder="Search" />
              </InputGroup>
            </Box>

            <Box>
              {new Array(10).fill(1).map((e, idx) => (
                <HStack
                  justify="space-between"
                  p="0.75em 1.5em"
                  cursor="pointer"
                  _hover={{
                    bg: bgSubPrimaryColor,
                  }}
                >
                  <Icon fontSize="" as={AiFillStar} color={primaryColor} />
                  <Text>HDD</Text>
                  <Text>{e * 0.01 * (idx + 1)}</Text>
                  <HStack>
                    <Text>0.5</Text>
                    <Icon
                      fontSize=""
                      as={idx % 4 === 0 ? VscArrowSmallDown : VscArrowSmallUp}
                      color={
                        idx % 2 === 0
                          ? fluctuationsColors.up
                          : fluctuationsColors.down
                      }
                    />
                  </HStack>
                </HStack>
              ))}
            </Box>
          </Box>
        </GridItem>
        <GridItem rowSpan={3} colSpan={2} bg={bgPrimaryColor}>
          <Box h="100%" p="1em">
            <HStack>
              <Icon fontSize="4xl" as={FaBitcoin} color={primaryColor} />
              <Text>BTC/USDT</Text>
            </HStack>
            <HStack spacing={8}>
              <Text fontSize="3xl" color={fluctuationsColors.up}>
                31,590.62
              </Text>

              <Box fontSize="xs">
                <Text color={textNormalColor}>24h Change</Text>
                <Text>161.35 +0.51%</Text>
              </Box>
              <Box fontSize="xs">
                <Text color={textNormalColor}>24h High</Text>
                <Text>32,249.18</Text>
              </Box>
              <Box fontSize="xs">
                <Text color={textNormalColor}>24h Low</Text>
                <Text>32,249.18</Text>
              </Box>
              <Box fontSize="xs">
                <Text color={textNormalColor}>24h Volume(BTC)</Text>
                <Text>45,791.05</Text>
              </Box>
              <Box fontSize="xs">
                <Text color={textNormalColor}>24h Volume(USDT)</Text>
                <Text>1,448,447,352.21</Text>
              </Box>
            </HStack>
            {/* <HStack>
              <Text>Time</Text>
              <Text>15m</Text>
              <Text>1H</Text>
              <Text>4H</Text>
            </HStack> */}
            <Box h="calc(100% - 4em)">
              <KLineChart h="100%" />
            </Box>
          </Box>
        </GridItem>
        <GridItem rowSpan={5} bg={bgPrimaryColor} />
        <GridItem rowSpan={2} bg={bgPrimaryColor} />
        <GridItem rowSpan={2} colSpan={2} bg={bgPrimaryColor} />
      </Grid>
    </Box>
  );
};

export default Trade;
