import { Divider, Grid, Heading, HStack, Spinner, Text } from '@chakra-ui/react';
import moment from 'moment';
import { useContext, useMemo, useState } from 'react';
import Countdown, { CountdownRendererFn, CountdownRenderProps } from 'react-countdown';
import { VoidContext } from '../../context/VoidContext';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import { palette } from '../../styles/palette';

export default function PresaleEpoch() {
  const { Presale } = useContext(VoidContext);
  const { addLeadingZeroes } = useWeb3Formatter();
  const ended = useMemo(() => {
    if (!Presale.endsAt) return false;
    return moment(Presale.endsAt).isBefore(Date.now() / 1000);
  }, [Presale.endsAt]);
  const renderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <Text>Ended</Text>;
    } else {
      // Render a countdown
      return (
        <>
          <HStack alignSelf={'start'}>
            <Text>Presale ends in: </Text>
            <Text>
              {addLeadingZeroes(hours, 2)}:{addLeadingZeroes(minutes, 2)}:
              {addLeadingZeroes(seconds, 2)}
            </Text>
          </HStack>
        </>
      );
    }
  };
  return (
    <>
      {Presale.endsAt && <Countdown renderer={renderer} date={Presale.endsAt * 1000} />}
      <Grid
        border={`1px solid ${palette.blue}`}
        w="full"
        rounded="xl"
        templateColumns={{ base: '1fr', xl: !ended ? 'repeat(3,1fr)' : '1fr 5% 1fr' }}
        p={!ended ? 0 : 2}
        textAlign="center"
      >
        {!ended ? (
          <>
            <Grid
              gap={6}
              borderRight={{ base: '', xl: `1px solid ${palette.blue}` }}
              borderBottom={{ base: `1px solid ${palette.blue}`, xl: '0px solid' }}
              p={4}
              w="full"
              justifyItems={'center'}
              alignItems="center"
              templateColumns={'1fr 5% 1fr'}
              h="max-content"
            >
              <Text>CURRENT ROUND</Text>
              <Divider orientation="vertical" borderLeftColor={palette.blue} opacity={1} />
              {Presale.loading ? (
                <Spinner size="md" />
              ) : (
                <Text>
                  {Presale.currentEpoch?.id ?? 0}/{Presale.totalEpochs}
                </Text>
              )}
            </Grid>
            <Grid
              gap={6}
              borderRight={{ base: '', xl: `1px solid ${palette.blue}` }}
              borderBottom={{ base: `1px solid ${palette.blue}`, xl: '0px solid' }}
              p={4}
              w="full"
              justifyItems={'center'}
              alignItems="center"
              templateColumns={'1fr 5% 1fr'}
              h="max-content"
            >
              <Text>MAX CONTRIBUTION </Text>
              <Divider orientation="vertical" borderLeftColor={palette.blue} opacity={1} />
              {Presale.loading ? (
                <Spinner size="md" />
              ) : (
                <Text>{Presale.currentEpoch && Presale.currentEpoch.maxContribution} $BUSD</Text>
              )}
            </Grid>
            <Grid
              gap={6}
              // borderRight={{ base: '', xl: `1px solid ${palette.blue}` }}
              // borderBottom={{ base: `1px solid ${palette.blue}`, xl: '0px solid' }}
              p={4}
              w="full"
              justifyItems={'center'}
              alignItems="center"
              templateColumns={'1fr 5% 1fr'}
              h="max-content"
            >
              <Text>YOUR CONTRIBUTION</Text>
              <Divider orientation="vertical" borderLeftColor={palette.blue} opacity={1} />
              {Presale.loading ? <Spinner size="md" /> : <Text>{Presale.userInvested} $BUSD</Text>}
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
