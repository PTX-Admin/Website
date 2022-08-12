import {
  Box,
  HStack,
  Image,
  Text,
  Divider,
  IconButton,
  Flex,
  VStack,
  Button,
  Grid,
} from '@chakra-ui/react';
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaRedditAlien,
} from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  return (
    <Box>
      <Flex pb={5} gap={20} px={'5%'} pt={'40px'} bgColor={'#00060A'}>
        <VStack flex={1}>
          <Image
            alignItems={'flex-start'}
            src="/logo.png"
            alt="ProtocolX Logo"
            objectFit={'contain'}
            maxW={{ base: '100px', md: '256px' }}
          />
          <Text fontSize={'smaller'}>
            We aspire to delevop a large-scale ecosystem that is the future of decentralized
            finance. Having one basic formula or business model in a protocol opens the opportunity
            for significant failure points, often reliyingon one avenue for growth and development.
          </Text>
        </VStack>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            '2xl': 'repeat(3,1fr)',
          }}
          flex={1}
        >
          <VStack pt={6} alignItems={'start'}>
            <Text color={'#DA2A2A'}>MAP</Text>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/Presale', undefined, { shallow: true })}
            >
              Presale
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              Whitepaper
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              About us
            </Button>
          </VStack>

          <VStack pt={6} alignItems={'start'}>
            <Text color={'#DA2A2A'}>PRODUCTS</Text>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              $PTX
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              XShare
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              XSwap
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              Dex
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              Farming & Staking
            </Button>
          </VStack>
          <VStack pt={6} alignItems={'start'}>
            <Text color={'#DA2A2A'}>COMMUNITY</Text>
            <a href="https://www.twitter.com/ProtocolX_" target="_blank" rel="noreferrer">
              <Button
                px={0}
                leftIcon={<FaTwitter />}
                border={0}
                onClick={() => router.push('/', undefined, { shallow: true })}
              >
                Twitter
              </Button>
            </a>
            <a href="https://discord.gg/protocolX" target="_blank" rel="noreferrer">
              <Button
                px={0}
                leftIcon={<FaDiscord />}
                border={0}
                onClick={() => router.push('/', undefined, { shallow: true })}
              >
                Discord
              </Button>
            </a>
          </VStack>
        </Grid>
      </Flex>
      <Divider className=""></Divider>
      <HStack px={'5%'} w={'full'} bgColor={'#000305'} justifyContent={'space-between'}>
        <Text fontSize={'x-small'}>
          COPYRIGHT © 2022 - PROTOCOLX | Terms & Conditions | designed by woxcreativedesign
        </Text>
        <Box>
          <a href="" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Telegram"
              icon={<FaTelegram />}
            />
          </a>
          <a href="https://www.twitter.com/ProtocolX_" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </a>
          <a href="https://discord.gg/protocolX" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Discord"
              icon={<FaDiscord />}
            />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Instagram"
              icon={<FaInstagram />}
            />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Linkedin"
              icon={<FaLinkedinIn />}
            />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Github"
              icon={<FaGithub />}
            />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Reddit"
              icon={<FaRedditAlien />}
            />
          </a>
        </Box>
      </HStack>
    </Box>
  );
}
