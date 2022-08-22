import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import Countdown, { CountdownRendererFn, CountdownRenderProps } from 'react-countdown';
import { ProtocolXContext } from '../../../context/ProtocolXContext';
import useWeb3Formatter from '../../../hooks/useWeb3Formatter';

export default function PreasleCountdown() {
  const { Presale } = useContext(ProtocolXContext);
  const { addLeadingZeroes } = useWeb3Formatter();

  const endRenderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    days,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <Heading>PRESALE HAS ENDED</Heading>;
    } else {
      // Render a countdown
      return (
        <>
          <VStack alignSelf={'center'}>
            <Heading>Presale ends in: </Heading>
            <Heading w="max-content">
              {addLeadingZeroes(days, 2)}:{addLeadingZeroes(hours, 2)}:
              {addLeadingZeroes(minutes, 2)}:{addLeadingZeroes(seconds, 2)}
            </Heading>
          </VStack>
        </>
      );
    }
  };

  const renderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    days,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return (
        <>{Presale.endsAt && <Countdown renderer={endRenderer} date={Presale.endsAt * 1000} />}</>
      );
    } else {
      // Render a countdown
      return (
        <>
          <VStack alignSelf={'center'}>
            <Heading>Presale starts in: </Heading>
            <Heading w="max-content">
              {addLeadingZeroes(days, 2)}:{addLeadingZeroes(hours, 2)}:
              {addLeadingZeroes(minutes, 2)}:{addLeadingZeroes(seconds, 2)}
            </Heading>
          </VStack>
        </>
      );
    }
  };
  return (
    <>{Presale.startsAt && <Countdown renderer={renderer} date={Presale.startsAt * 1000} />}</>
  );
}
