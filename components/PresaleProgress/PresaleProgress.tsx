import { Divider, HStack, Progress, Spinner, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ProtocolXContext } from '../../context/ProtocolXContext';
import useWeb3Formatter from '../../hooks/useWeb3Formatter';
import { palette } from '../../styles/palette';

export default function PresaleProgres() {
  const { toFormattedValueNoDeciamls } = useWeb3Formatter();
  const { Presale } = useContext(ProtocolXContext);
  return (
    <>
      {Presale.loading ? (
        <Spinner size="xl" />
      ) : (
        <>
          <Text
            w="full"
            textAlign={'center'}
            fontWeight={700}
            fontSize="xl"
            pt={4}
            textDecor="underline"
          >
            {'soft cap hit token will launch regardless of remaining raise'.toUpperCase()}
          </Text>
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
            colorScheme={'red'}
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
