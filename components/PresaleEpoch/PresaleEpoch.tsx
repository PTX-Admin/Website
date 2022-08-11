import { Divider, Grid, Spinner, Text, VStack } from '@chakra-ui/react';
import moment from 'moment';
import { useContext, useMemo, useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { BUSDAddress, presaleContractConfig } from '../../config/constants';
import { ProtocolXContext } from '../../context/ProtocolXContext';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import { palette } from '../../styles/palette';

export default function PresaleEpoch() {
  const { Presale } = useContext(ProtocolXContext);
  const { toFormattedValueNoDeciamls } = useWeb3Formatter();
  const [balance, setBalance] = useState<number>(0);
  const { address } = useAccount();
  const { isLoading } = useBalance({
    addressOrName: address,
    token: presaleContractConfig.addressOrName,
    watch: true,
    onSuccess(data) {
      setBalance(Number(data.formatted));
    },
  });
  const ended = useMemo(() => {
    if (!Presale.endsAt) return false;
    return moment(Presale.endsAt).isBefore(Date.now() / 1000);
  }, [Presale.endsAt]);
  return (
    <>
      <Text fontSize={'lg'} fontWeight="bold">
        Presale information
      </Text>
      <Grid
        border={`1px solid red`}
        w="full"
        rounded="xl"
        templateColumns={{ base: '1fr', xl: !ended ? 'repeat(3,1fr)' : '1fr 5% 1fr' }}
        p={!ended ? 0 : 2}
        textAlign="center"
        alignItems={'center'}
      >
        {!ended ? (
          <>
            <Grid
              gap={6}
              borderRight={{ base: '', xl: `1px solid red` }}
              borderBottom={{ base: `1px solid red`, xl: '0px solid' }}
              p={4}
              w="full"
              justifyItems={'center'}
              alignItems="center"
              templateColumns={'1fr 5% 1fr'}
              h="max-content"
            >
              <Text>TOKEN PRICE</Text>
              <Divider orientation="vertical" borderLeftColor={'red'} opacity={1} />
              {Presale.loading ? (
                <Spinner size="md" />
              ) : (
                <Text>{(Presale.currentEpoch?.price ?? 0) / 100} $BUSD</Text>
              )}
            </Grid>
            <Grid
              gap={6}
              borderRight={{ base: '', xl: `1px solid red` }}
              borderBottom={{ base: `1px solid red`, xl: '0px solid' }}
              p={4}
              w="full"
              justifyItems={'center'}
              alignItems="center"
              templateColumns={'1fr 5% 1fr'}
              h="max-content"
            >
              <Text>MAX. PER WALLET</Text>
              <Divider orientation="vertical" borderLeftColor={'red'} opacity={1} />
              {Presale.loading ? (
                <Spinner size="md" />
              ) : (
                <Text>
                  {toFormattedValueNoDeciamls(
                    (Presale.userCap ?? 0) * ((Presale?.currentEpoch?.price ?? 0) / 100)
                  )}{' '}
                  $BUSD
                </Text>
              )}
            </Grid>
            <Grid
              gap={6}
              // borderRight={{ base: '', xl: `1px solid red` }}
              // borderBottom={{ base: `1px solid red`, xl: '0px solid' }}
              p={4}
              w="full"
              justifyItems={'center'}
              alignItems="center"
              templateColumns={'1fr 5% 1fr'}
              h="max-content"
            >
              <Text>YOUR INVESTMENT</Text>
              <Divider orientation="vertical" borderLeftColor={'red'} opacity={1} />
              <VStack>
                {Presale.loading ? (
                  <Spinner size="md" />
                ) : (
                  <>
                    <Text>{toFormattedValueNoDeciamls(Presale.userInvested ?? 0)} $BUSD</Text>
                    <Divider w="50%" borderBottomColor="red" />
                    <Text fontSize={'xs'}>{toFormattedValueNoDeciamls(balance)} $pPTX</Text>
                  </>
                )}
              </VStack>
            </Grid>
          </>
        ) : (
          <>
            <Text>Presale has ended</Text>
          </>
        )}
      </Grid>
    </>
  );
}
