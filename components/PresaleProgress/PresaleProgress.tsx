import { Divider, HStack, Progress, Spinner, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { VoidContext } from '../../context/VoidContext';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import { palette } from '../../styles/palette';

export default function PresaleProgres() {
  const { toFormattedValueNoDeciamls } = useWeb3Formatter();
  const { Presale } = useContext(VoidContext);
  return (
    <>
      <HStack gap={8} fontSize="2xl" w={{ base: '100%', lg: '50%' }} alignSelf="start" py={12}>
        <Divider w="10%" borderColor={palette.blue} borderBottomWidth="4px" opacity={1} />
        <Text fontWeight={'bold'}>WL ICO PROGRESS BAR</Text>
      </HStack>
      {Presale.loading ? (
        <Spinner size="xl" />
      ) : (
        <>
          {' '}
          <HStack w="full" justifyContent={'space-between'}>
            <Text>Funds raised</Text>
            <Text>Goal</Text>
          </HStack>
          <Progress
            value={Presale.totalInvested}
            min={0}
            max={Presale.totalCap}
            w="full"
            rounded={'md'}
            size="lg"
            backgroundColor={palette.yellow}
            colorScheme={'progress'}
          />
          <HStack w="full" justifyContent={'space-between'}>
            <Text>{toFormattedValueNoDeciamls(Presale.totalInvested ?? 0)} $BUSD</Text>
            <Text>{toFormattedValueNoDeciamls(Presale.totalCap ?? 0)} $BUSD</Text>
          </HStack>
        </>
      )}
    </>
  );
}
