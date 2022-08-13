import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react';

export default function BuiltBySolar() {
  return (
    <VStack pt={10} w="full" justifyContent={'center'} px="5%">
      <Text w="fit-content">Website brought to you by: </Text>
      <Link href="https://www.solarprotocol.io/" isExternal maxW={{ base: '30vw', md: '20vw' }}>
        <Image alt="Solar Protocol's logo" src="./solar.png" objectFit={'contain'} />
      </Link>
    </VStack>
  );
}
