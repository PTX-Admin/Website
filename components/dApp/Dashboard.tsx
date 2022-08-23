import { Grid, Heading, Skeleton, Spinner, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import Countdown, { CountdownRendererFn, CountdownRenderProps } from 'react-countdown';
import { IPairsResponse } from '../../config/types';
import { ProtocolXContext } from '../../context/ProtocolXContext';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import DappItem from './DappItem';

export default function Dashboard({ pairs }: IPairsResponse) {
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
    <VStack w="full" overflowY={'auto'} data-aos="zoom-out">
      <Text fontWeight={700} fontSize="2xl">
        DASHBOARD
      </Text>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)', '2xl': 'repeat(3,1fr)' }}
        w="full"
        rounded="xl"
        bg="rgba(32, 0, 0, 0.5);"
        p={{ base: 2, lg: 8 }}
        gap={6}
        rowGap={6}
        textAlign="center"
      >
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="PTX PRICE"
            content={
              pairs === null ? (
                <Text
                  fontWeight={700}
                  fontSize={{ base: '24px', lg: '42px' }}
                  lineHeight={'59px'}
                  color="rgba(222, 0, 0, 1)"
                >
                  0
                </Text>
              ) : (
                <Text
                  fontWeight={700}
                  fontSize={{ base: '24px', lg: '42px' }}
                  lineHeight={'59px'}
                  color="rgba(222, 0, 0, 1)"
                >
                  ${toFormattedValue(Number(pairs[0].priceUsd))}
                </Text>
              )
            }
          />
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="MARKET CAP"
            content={
              pairs === null ? (
                <Text
                  fontWeight={700}
                  fontSize={{ base: '24px', lg: '42px' }}
                  lineHeight={'59px'}
                  color="rgba(222, 0, 0, 1)"
                >
                  0
                </Text>
              ) : (
                <Text
                  fontWeight={700}
                  fontSize={{ base: '24px', lg: '42px' }}
                  lineHeight={'59px'}
                  color="rgba(222, 0, 0, 1)"
                >
                  ${toFormattedValue(Number(pairs[0].fdv))}
                </Text>
              )
            }
          />
        </Skeleton>

        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="CIRCULATING SUPPLY (PTX)"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                {toFormattedValueNoDeciamls(tokenDetails.circulatingSupply ?? 0)}
              </Text>
            }
          />
        </Skeleton>

        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="BACKED LIQUIDITY"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                100%
              </Text>
            }
          />
        </Skeleton>

        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="NEXT REBASE"
            content={<Countdown date={(tokenDetails.nextRebase ?? 0) * 1000} renderer={renderer} />}
          />
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="AVERAGE PTX HOLDING"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                {toFormattedValueNoDeciamls(
                  (tokenDetails.circulatingSupply ?? 0) / (tokenDetails.holders ?? 0)
                )}
              </Text>
            }
          />
        </Skeleton>
      </Grid>

      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }}
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
            label="PTX BURNED"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                $
                {toFormattedValue(
                  (tokenDetails.burned ?? 0) * (pairs === null ? 0 : Number(pairs[0].priceUsd) ?? 0)
                )}
              </Text>
            }
            bg="rgba(32, 0, 0, 0.5);"
          >
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
              {tokenDetails.burned ?? 0} PTX
            </Text>
          </DappItem>
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="TREASURY"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                $
                {toFormattedValue(
                  75000 +
                    (tokenDetails.treasuryBalance ?? 0) *
                      (pairs === null ? 0 : Number(pairs[0].priceUsd) ?? 0)
                )}
              </Text>
            }
            bg="rgba(32, 0, 0, 0.5);"
          >
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'} color="transparent">
              &nbsp;
            </Text>
          </DappItem>
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="LIQUIDITY"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                ${toFormattedValue(pairs === null ? 0 : pairs[0].liquidity?.usd ?? 0)}
              </Text>
            }
            bg="rgba(32, 0, 0, 0.5);"
          >
            <Text fontWeight={700} fontSize="20px" lineHeight={'24px'} color="transparent">
              &nbsp;
            </Text>
          </DappItem>
        </Skeleton>
        <Skeleton
          isLoaded={!tokenDetails.loading}
          startColor="rgba(222, 0, 0, 0.5)"
          endColor="black"
        >
          <DappItem
            label="INVESTMENT FUNDS"
            content={
              <Text
                fontWeight={700}
                fontSize={{ base: '24px', lg: '42px' }}
                lineHeight={'59px'}
                color="rgba(222, 0, 0, 1)"
              >
                ${toFormattedValue(200000)}
              </Text>
            }
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
