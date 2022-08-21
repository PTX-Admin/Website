import {
  Button,
  Grid,
  HStack,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
  Slider,
  Box,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import logo from '../../Assets/landing/logo.png';
import { presaleContractConfig, ptxContractConfig } from '../../config/constants';
import { IPairsResponse } from '../../config/types';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import { palette } from '../../styles/palette';
import DappItem from './DappItem';

export default function Calculator({ pairs }: IPairsResponse) {
  const [getPTXAmount, setPTXAmount] = useState<number>(0);
  const [getPTXFuturePrice, setPTXFuturePrice] = useState<number>(0);
  const [getPTXPurchasedPrice, setPTXPurchasedPrice] = useState(0);
  const [getAPY, setAPY] = useState(0);

  const [sliderValue, setSliderValue] = useState(30);
  const { toFormattedValue } = useWeb3Formatter();
  const [balance, setBalance] = useState<number>(0);
  const { address } = useAccount();
  const { isLoading } = useBalance({
    addressOrName: address,
    token: ptxContractConfig.addressOrName,
    watch: true,
    onSuccess(data) {
      setBalance(Number(data.formatted));
    },
  });
  return (
    <VStack
      fontWeight={700}
      w="full"
      overflowY={'auto'}
      h="744px"
      overflow={'auto'}
      data-aos="zoom-out"
      px={6}
    >
      <Text fontWeight={700} fontSize="2xl">
        CALCULATOR
      </Text>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(3,1fr)' }}
        w="full"
        rounded="xl"
        gap={6}
        rowGap={6}
        pt={6}
      >
        <DappItem
          label="PTX PRICE"
          content={
            pairs === null ? (
              <Text fontWeight={700} fontSize="42px" lineHeight={'59px'} color="rgba(222, 0, 0, 1)">
                0
              </Text>
            ) : (
              <Text fontWeight={700} fontSize="42px" lineHeight={'59px'} color="rgba(222, 0, 0, 1)">
                ${toFormattedValue(Number(pairs[0].priceUsd))}
              </Text>
            )
          }
          bg="rgba(32, 0, 0, 0.5);"
        >
          <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
            {/*             41660 PTX
             */}{' '}
          </Text>
        </DappItem>
        <DappItem label="APY" content={'68,834%'} bg="rgba(32, 0, 0, 0.5);">
          <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
            1.77% DAILY
          </Text>
        </DappItem>
        <DappItem
          label="YOUR BALANCE"
          content={
            pairs === null || address === undefined ? (
              <Text fontWeight={700} fontSize="42px" lineHeight={'59px'} color="rgba(222, 0, 0, 1)">
                0
              </Text>
            ) : (
              <Text fontWeight={700} fontSize="42px" lineHeight={'59px'} color="rgba(222, 0, 0, 1)">
                ${toFormattedValue(Number(Number(pairs[0].priceUsd) * balance))}
              </Text>
            )
          }
          bg="rgba(32, 0, 0, 0.5);"
        >
          <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
            {balance} PTX
          </Text>
        </DappItem>
      </Grid>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }}
        w="full"
        rounded="xl"
        gap={6}
        rowGap={6}
        pt={6}
      >
        <VStack w={'full'} align={'start'}>
          <Text placeSelf={'start'}>PTX Amount</Text>
          <HStack
            justifyContent={'space-between'}
            w={'full'}
            rounded={'2xl'}
            bgColor={'rgba(32, 0, 0, 0.5);'}
          >
            <NumberInput
              value={getPTXAmount}
              onChange={(e) => {
                setPTXAmount(Number(e));
              }}
              width={'full'}
              rounded={'2xl'}
              border={'none'}
            >
              <NumberInputField
                _focusVisible={{ border: 'none', textDecoration: 'none' }}
                rounded={'2xl'}
                border={'none'}
              />
            </NumberInput>
            <Button
              onClick={() => {
                address === undefined ? setPTXAmount(0) : setPTXAmount(balance);
              }}
              _active={{ textDecoration: 'none' }}
              _focus={{ textDecoration: 'none' }}
              _hover={{ textDecoration: 'none' }}
              variant={'ghost'}
            >
              Max
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} align={'start'}>
          <Text placeSelf={'start'}>APY %</Text>
          <HStack
            justifyContent={'space-between'}
            w={'full'}
            rounded={'2xl'}
            bgColor={'rgba(32, 0, 0, 0.5);'}
          >
            <NumberInput
              value={getAPY}
              onChange={(e) => {
                setAPY(Number(e));
              }}
              w={'full'}
              rounded={'2xl'}
              border={'none'}
            >
              <NumberInputField
                _focusVisible={{ border: 'none', textDecoration: 'none' }}
                rounded={'2xl'}
                border={'none'}
              />
            </NumberInput>
            <Button
              _active={{ textDecoration: 'none' }}
              _focus={{ textDecoration: 'none' }}
              _hover={{ textDecoration: 'none' }}
              variant={'ghost'}
            >
              Current
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} align={'start'}>
          <Text placeSelf={'start'}>Purchased PTX price</Text>
          <HStack
            justifyContent={'space-between'}
            w={'full'}
            rounded={'2xl'}
            bgColor={'rgba(32, 0, 0, 0.5);'}
          >
            <NumberInput
              value={getPTXPurchasedPrice}
              onChange={(e) => {
                setPTXPurchasedPrice(Number(e));
              }}
              w={'full'}
              rounded={'2xl'}
              border={'none'}
            >
              <NumberInputField
                _focusVisible={{ border: 'none', textDecoration: 'none' }}
                rounded={'2xl'}
                border={'none'}
              />
            </NumberInput>
            <Button
              onClick={() => {
                pairs === null
                  ? setPTXPurchasedPrice(0)
                  : setPTXPurchasedPrice(Number(toFormattedValue(Number(pairs[0].priceUsd))));
              }}
              _active={{ textDecoration: 'none' }}
              _focus={{ textDecoration: 'none' }}
              _hover={{ textDecoration: 'none' }}
              variant={'ghost'}
            >
              Current
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} align={'start'}>
          <Text placeSelf={'start'}>Future PTX price</Text>
          <HStack
            justifyContent={'space-between'}
            w={'full'}
            rounded={'2xl'}
            bgColor={'rgba(32, 0, 0, 0.5);'}
          >
            <NumberInput
              value={getPTXFuturePrice}
              onChange={(e) => {
                setPTXFuturePrice(Number(e));
              }}
              w={'full'}
              rounded={'2xl'}
              border={'none'}
            >
              <NumberInputField
                _focusVisible={{ border: 'none', textDecoration: 'none' }}
                rounded={'2xl'}
                border={'none'}
              />
            </NumberInput>
            <Button
              onClick={() => {
                pairs === null
                  ? setPTXFuturePrice(0)
                  : setPTXFuturePrice(Number(toFormattedValue(Number(pairs[0].priceUsd))));
              }}
              _active={{ textDecoration: 'none' }}
              _focus={{ textDecoration: 'none' }}
              _hover={{ textDecoration: 'none' }}
              variant={'ghost'}
            >
              Current
            </Button>
          </HStack>
        </VStack>
      </Grid>
      <VStack pt={5} alignItems={'start'} spacing={5} w={'full'}>
        <Text fontSize={'lg'}>{sliderValue} days</Text>
        <Box w={'full'}>
          <Slider
            onChange={(v) => setSliderValue(v)}
            aria-label="slider-ex-4"
            defaultValue={30}
            min={1}
            max={365}
          >
            <SliderTrack borderRadius={5} minH={'15px'} bg="#20000080">
              <SliderFilledTrack
                minH={'15px'}
                bg={
                  'linear-gradient(90deg, rgba(207, 0, 0, 0.5) 8.11%, rgba(129, 0, 0, 0) 204.05%);'
                }
              />
            </SliderTrack>
            <SliderThumb color={'brown'} boxSize={8}>
              <Box p={1} color="red" as={Image} src={logo.src} />
            </SliderThumb>
          </Slider>
        </Box>
        <HStack justifyContent={'space-between'} w={'full'}>
          <Text>Initial Investment</Text>
          <Text>${getPTXAmount * getPTXPurchasedPrice}</Text>
        </HStack>
        <HStack justifyContent={'space-between'} w={'full'}>
          <Text>Current Worth</Text>
          <Text>
            $
            {pairs === null
              ? 0
              : getPTXAmount * Number(toFormattedValue(Number(pairs[0].priceUsd)))}
          </Text>
        </HStack>
        <HStack justifyContent={'space-between'} w={'full'}>
          <Text>PTX Rewards Amount</Text>
          <Text>0PTX</Text>
        </HStack>
        <HStack justifyContent={'space-between'} w={'full'}>
          <Text>Potential return</Text>
          <Text>$0</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
