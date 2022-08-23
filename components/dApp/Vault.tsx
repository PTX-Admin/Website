import { Grid, Skeleton, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import Countdown, { CountdownRendererFn, CountdownRenderProps } from 'react-countdown';
import { IPairsResponse } from '../../config/types';
import { ProtocolXContext } from '../../context/ProtocolXContext';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import DappItem from './DappItem';

export default function Vault({ pairs }: IPairsResponse) {
  const { toFormattedValueNoDeciamls, toFormattedValue, addLeadingZeroes } = useWeb3Formatter();
  const { tokenDetails } = useContext(ProtocolXContext);
  const renderer: CountdownRendererFn = ({ minutes, seconds }: CountdownRenderProps) => {
    return (
      <>
        <Text
          fontWeight={700}
          fontSize={{ base: '24px', lg: '42px' }}
          lineHeight={'59px'}
          color="rgba(222, 0, 0, 1)"
        >
          {addLeadingZeroes(minutes, 2)}:{addLeadingZeroes(seconds, 2)}
        </Text>
      </>
    );
  };

  return (
    <VStack w="full" overflowY={'auto'} h="744px" overflow={'auto'} data-aos="zoom-out">
      <Text fontWeight={700} fontSize="2xl">
        THE VAULT
      </Text>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }}
        w="full"
        rounded="xl"
        bg="rgba(32, 0, 0, 0.5);"
        p={8}
        gap={6}
        rowGap={6}
      >
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem label="TOTAL EARNED" content={'$ 250.00'}>
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
              4166 PTX
            </Text>
          </DappItem>
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="APY"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                {toFormattedValue(tokenDetails.apy ?? 0)}%
              </Text>
            }
          >
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
              1.77% DAILY
            </Text>
          </DappItem>
        </Skeleton>
      </Grid>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(3,1fr)' }}
        w="full"
        rounded="xl"
        gap={6}
        rowGap={6}
        pt={6}
      >
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="YOUR BALANCE"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                $
                {toFormattedValue(
                  (tokenDetails.balance ?? 0) * (pairs === null ? 0 : Number(pairs[0].priceUsd))
                )}
              </Text>
            }
            bg="rgba(32, 0, 0, 0.5);"
          >
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
              {toFormattedValue(tokenDetails.balance ?? 0)} PTX
            </Text>
          </DappItem>
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="DAILY EARNING"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                $
                {toFormattedValue(
                  (tokenDetails.balance ?? 0) *
                    (pairs === null ? 0 : Number(pairs[0].priceUsd)) *
                    1.77 -
                    (tokenDetails.balance ?? 0) * (pairs === null ? 0 : Number(pairs[0].priceUsd))
                )}
              </Text>
            }
            bg="rgba(32, 0, 0, 0.5);"
          >
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
              {toFormattedValue((tokenDetails.balance ?? 0) * 1.77 - (tokenDetails.balance ?? 0))}{' '}
              PTX
            </Text>
          </DappItem>
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="NEXT REBASE"
            content={<Countdown date={(tokenDetails.nextRebase ?? 0) * 1000} renderer={renderer} />}
            bg="rgba(32, 0, 0, 0.5);"
          >
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'} color="transparent">
              &nbsp;
            </Text>
          </DappItem>
        </Skeleton>
      </Grid>
    </VStack>
  );
}
