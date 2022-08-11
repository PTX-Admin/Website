import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, Image, Link, Text } from '@chakra-ui/react';

export default function BuiltBySolar() {
  return (
    <HStack pt={32} w="full" justifyContent={'center'} px="5%">
      <Text w="fit-content">Website brought to you by: </Text>
      <Link href="https://www.solarprotocol.io/" isExternal maxW={{ base: '75%', md: '25%' }}>
        <Image alt="Solar Protocol's logo" src="./solar.png" objectFit={'contain'} />
      </Link>
    </HStack>
  );
}
