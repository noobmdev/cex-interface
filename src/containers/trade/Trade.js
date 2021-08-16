import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import KLineChart from 'components/trade/KLineChart';
import { fluctuationsColors } from 'constants/styles.constant';
import useColors from 'hooks/useColors';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaSignal } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc';

const Trade = () => {
  const {
    bgPrimaryColor,
    bgSubPrimaryColor,
    bgNormalColor,
    primaryColor,
    textPrimaryColor,
    textNormalColor,
  } = useColors();

  return (
    <Box>
      <HStack
        bg={bgPrimaryColor}
        m="1em 1em 0"
        p="1em"
        justify="space-between"
        spacing={4}
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row', xl: 'row' }}
          align="center"
          justify="center"
        >
          <Box mr="2em">
            <Text fontSize="xl" as="b">
              BTC/USDT
            </Text>
            <Text d={{ base: 'none', md: 'block', lg: 'block', xl: 'block' }}>
              Bitcoin
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" color={fluctuationsColors.up}>
              31,590.62
            </Text>
            <Text fontSize="xs">161.35 +0.51%</Text>
          </Box>
        </Flex>

        <HStack>
          <Flex
            flexDir={{ base: 'column', lg: 'row', xl: 'row' }}
            mr={{ base: '0', sm: '1em', md: '6em', lg: '6em', xl: '6em' }}
          >
            <Box mr={{ base: 0, lg: '6em', xl: '6em' }}>
              <Box fontSize="xs">
                <Text
                  color={textNormalColor}
                  fontSize={{ base: 'x-small', lg: 'xs', xl: 'xs' }}
                >
                  24h High
                </Text>
                <Text>32,249.18</Text>
              </Box>
            </Box>
            <Box mt={{ base: '1em', lg: 0, xl: 0 }}>
              <Box fontSize="xs">
                <Text
                  color={textNormalColor}
                  fontSize={{ base: 'x-small', lg: 'xs', xl: 'xs' }}
                >
                  24h Low
                </Text>
                <Text>32,249.18</Text>
              </Box>
            </Box>
          </Flex>
          <Flex flexDir={{ base: 'column', lg: 'row', xl: 'row' }}>
            <Box mr={{ base: 0, lg: '6em', xl: '6em' }}>
              <Box fontSize="xs">
                <Text
                  color={textNormalColor}
                  fontSize={{ base: 'x-small', lg: 'xs', xl: 'xs' }}
                >
                  24h Volume(BTC)
                </Text>
                <Text>45,791.05</Text>
              </Box>
            </Box>
            <Box mt={{ base: '1em', lg: 0, xl: 0 }}>
              <Box fontSize="xs">
                <Text
                  color={textNormalColor}
                  fontSize={{ base: 'x-small', lg: 'xs', xl: 'xs' }}
                >
                  24h Volume(USDT)
                </Text>
                <Text>1,448,447,352.21</Text>
              </Box>
            </Box>
          </Flex>
        </HStack>
      </HStack>
      <Grid
        p="1em"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        minH="calc(100vh - 14.5em)"
      >
        <GridItem
          d={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}
          rowSpan={4}
          bg={bgPrimaryColor}
        >
          <HStack p="1em">
            <Box>TODO: oder box header</Box>
            <Box>2</Box>
            <Box>3</Box>
          </HStack>
          <HStack
            justify="space-between"
            px="1.5em"
            fontSize="sm"
            color={textNormalColor}
          >
            <Text flex="1">Price(USDT)</Text>
            <Text flex="1" textAlign="right">
              Amount(BTC)
            </Text>
            <Text flex="1" textAlign="right">
              Total
            </Text>
          </HStack>
          {new Array(10).fill('').map((e, idx) => (
            <Box
              d="flex"
              alignItems="stretch"
              justify="space-between"
              p="0.5em 1.5em"
              fontSize="sm"
              pos="relative"
              my="0.25em"
              fontSize="sm"
            >
              <Text flex="1" zIndex="2" color={fluctuationsColors.down}>
                31257.45
              </Text>
              <Text
                flex="1"
                textAlign="right"
                zIndex="2"
                color={textPrimaryColor}
              >
                0.04231
              </Text>
              <Text
                flex="1"
                textAlign="right"
                zIndex="2"
                color={textPrimaryColor}
              >
                500321
              </Text>
              <Box
                bg={fluctuationsColors.down}
                opacity="0.2"
                pos="absolute"
                left="0"
                top="0"
                borderBottom="0"
                right={`${100 - (20 - idx) * 2}%`}
                h="100%"
                zIndex="1"
              />
            </Box>
          ))}
          <HStack justify="space-between" px="1.5em">
            <Text as="b" fontSize="xl">
              31,869.80
            </Text>
            <HStack>
              <Text
                fontSize="sm"
                cursor="pointer"
                _hover={{
                  color: primaryColor,
                }}
              >
                More
              </Text>
              <Icon as={FaSignal} color={fluctuationsColors.up} />
            </HStack>
          </HStack>
          {new Array(10).fill('').map((e, idx) => (
            <Box
              d="flex"
              alignItems="stretch"
              justify="space-between"
              p="0.5em 1.5em"
              fontSize="sm"
              pos="relative"
              my="0.25em"
              fontSize="sm"
            >
              <Text flex="1" zIndex="2" color={fluctuationsColors.up}>
                31257.45
              </Text>
              <Text
                flex="1"
                textAlign="right"
                zIndex="2"
                color={textPrimaryColor}
              >
                0.04231
              </Text>
              <Text
                flex="1"
                textAlign="right"
                zIndex="2"
                color={textPrimaryColor}
              >
                500321
              </Text>
              <Box
                bg={fluctuationsColors.up}
                opacity="0.2"
                pos="absolute"
                left="0"
                top="0"
                borderBottom="0"
                right={`${100 - (idx + 11) * 3}%`}
                h="100%"
                zIndex="1"
              />
            </Box>
          ))}
        </GridItem>
        <GridItem
          rowSpan={{ base: 6, lg: 2, xl: 2 }}
          colSpan={{ base: 4, lg: 3, xl: 2 }}
          bg={bgPrimaryColor}
        >
          {/* <HStack>
              <Text>Time</Text>
              <Text>15m</Text>
              <Text>1H</Text>
              <Text>4H</Text>
            </HStack> */}
          <Box h="100%">
            <KLineChart h="100%" />
          </Box>
        </GridItem>
        <GridItem
          d={{ base: 'none', xl: 'block' }}
          rowSpan={2}
          bg={bgPrimaryColor}
          pos="relative"
        >
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
                  <Icon fontSize="2xl" as={FiSearch} color={textNormalColor} />
                }
              />
              <Input border="none" bg={bgNormalColor} placeholder="Search" />
            </InputGroup>
          </Box>

          <Box
            pos="absolute"
            left="0"
            right="0"
            bottom="1em"
            top="7em"
            overflowY="scroll"
          >
            {new Array(15).fill(1).map((e, idx) => (
              <HStack
                p="0.75em 1.5em"
                cursor="pointer"
                _hover={{
                  bg: bgSubPrimaryColor,
                }}
              >
                <Icon as={AiFillStar} color={primaryColor} mr="3em" />
                <HStack flex="1" justify="space-between">
                  <Text>HDD</Text>
                  <Text>{e * 0.01 * (idx + 1)}</Text>
                  <HStack>
                    <Text>0.5</Text>
                    <Icon
                      as={idx % 4 === 0 ? VscArrowSmallDown : VscArrowSmallUp}
                      color={
                        idx % 2 === 0
                          ? fluctuationsColors.up
                          : fluctuationsColors.down
                      }
                    />
                  </HStack>
                </HStack>
              </HStack>
            ))}
          </Box>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg={bgPrimaryColor} />
        <GridItem rowSpan={2} bg={bgPrimaryColor} />
      </Grid>
    </Box>
  );
};

export default Trade;
