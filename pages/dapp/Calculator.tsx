import { Grid, Text, VStack } from '@chakra-ui/react';
import DappItem from './DappItem';

export default function Calculator({}) {
  return (
    <VStack w="full" overflowY={'auto'} h="744px" overflow={'auto'} data-aos="zoom-out">
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
        <DappItem label="PTX PRICE" content={'$2500.00'} bg="rgba(32, 0, 0, 0.5);">
          <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
            41660 PTX
          </Text>
        </DappItem>
        <DappItem label="APY" content={'68,834%'} bg="rgba(32, 0, 0, 0.5);">
          <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
            1.77% DAILY
          </Text>
        </DappItem>
        <DappItem label="YOUR BALANCE" content={'$250.00'} bg="rgba(32, 0, 0, 0.5);">
          <Text fontWeight={700} fontSize="20px" lineHeight={'24px'}>
            4166 PTX
          </Text>
        </DappItem>
      </Grid>
    </VStack>
  );
}
