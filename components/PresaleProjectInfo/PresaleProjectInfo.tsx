import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Flex,
  HStack,
  Divider,
  Link,
  Text,
  Button,
  VStack,
  Heading,
  Image,
} from '@chakra-ui/react';
import { palette } from '../../styles/palette';

export default function PresaleProjectInfo() {
  return (
    <>
      <Flex direction={{ base: 'column', lg: 'row' }} w="full" py={12} gap={4}>
        <HStack gap={8} fontSize="2xl " w={{ base: '100%', lg: '50%' }}>
          <Divider w="10%" borderColor={palette.blue} borderBottomWidth="4px" opacity={1} />
          <Text fontWeight={'bold'}>PROJECT INFORMATION</Text>
        </HStack>
        <HStack
          justifyContent={{ base: 'space-between', lg: 'end' }}
          w={{ base: '100%', lg: '50%' }}
          gap={16}
        >
          <Button as={Link} href="https://youtube.com/c/ChrisCryptoCampus" isExternal>
            YOUTUBE
          </Button>
          <Button as={Link} href="https://medium.com/@void_token" isExternal>
            MEDIUM
          </Button>
        </HStack>
      </Flex>
      <Flex
        w="full"
        border={`1px solid ${palette.blue}`}
        rounded="xl"
        justifyContent={'space-between'}
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          w={{ base: '100%', md: '40%' }}
          p={{ base: 4, md: 0 }}
          mx={8}
          my={8}
          fontWeight="bold"
          gap={8}
        >
          <Heading>NEXT GENERATION HYBRID AUTO-REWARDING PROTOCOL</Heading>
          <Text>
            Void is the next revolution of DeFi. With the hybrid system of VOID we combine the best
            parts of REFLECTION, NFTs and OHM models into one unique project never seen before and a
            simple buy-hold-earn system that grows your portfolio in your wallet, fast and easy.
            Void rewards holders with automatic $DAI Reflection from our Treasury and every
            transaction made with $VOID, increasing their $DAI holdings over time.
          </Text>
        </VStack>
        <Image src="./seven.png" alt="decorated seven" objectFit={'contain'} w="25%" mx={8} />
      </Flex>
    </>
  );
}
