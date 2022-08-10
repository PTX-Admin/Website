import { HStack, Divider, Text, Image } from '@chakra-ui/react';
import { palette } from '../../styles/palette';

export default function ProjectTokenomics() {
  return (
    <>
      <HStack gap={8} fontSize="2xl" w={{ base: '100%', lg: '50%' }} alignSelf="start" py={12}>
        <Divider w="10%" borderColor={palette.blue} borderBottomWidth="4px" opacity={1} />
        <Text fontWeight={'bold'}>TOKENOMICS</Text>
      </HStack>
      <Image src="./tokenomics.png" alt="tokenomics" w="full" objectFit={'contain'} />
    </>
  );
}
