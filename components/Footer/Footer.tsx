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
  FaYoutube,
  FaMedium,
  FaMediumM,
  FaTelegramPlane,
  FaEnvelope,
  FaCoins,
} from 'react-icons/fa';
import { useRouter } from 'next/router';
import BuiltBySolar from '../BuiltBySolar';
import AssureIcon from '../../Assets/footer/AssureIcon';

export default function Footer() {
  const router = useRouter();

  return (
    <Box>
      <Flex pb={5} gap={20} px={'5%'} pt={'40px'} bgColor={'#00060A'}>
        <VStack pt={6} flex={1}>
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
          <BuiltBySolar />
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
              onClick={() => router.push('/presale', undefined, { shallow: true })}
            >
              Presale
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/PTX_WP.pdf', undefined, { shallow: true })}
            >
              Whitepaper
            </Button>
            <Button
              px={0}
              border={0}
              onClick={() => router.push('/about', undefined, { shallow: true })}
            >
              About us
            </Button>
            <a href="https://medium.com/@ProtocolXDeFi" target="_blank" rel="noreferrer">
              <Button px={0} leftIcon={<FaMediumM />} border={0}>
                Medium
              </Button>
            </a>
            <a
              href="https://www.assuredefi.io/projects/protocolx/"
              target="_blank"
              rel="noreferrer"
            >
              <Button px={0} leftIcon={<AssureIcon size="15px" />} border={0}>
                Assure KYC
              </Button>
            </a>
          </VStack>
          <VStack pt={6} alignItems={'start'}>
            <Text color={'#DA2A2A'}>PRODUCTS</Text>
            <a
              href="https://bscscan.com/address/0x5Ec500C5C6f0a270b633d5D5f0c3b9eB9b041455#code"
              target="_blank"
              rel="noreferrer"
            >
              <Button px={0} leftIcon={<FaCoins />} border={0}>
                $PTX
              </Button>
            </a>
            <Button
              disabled
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              XShare
            </Button>
            <Button
              disabled
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              XSwap
            </Button>
            <Button
              disabled
              px={0}
              border={0}
              onClick={() => router.push('/', undefined, { shallow: true })}
            >
              Dex
            </Button>
            <Button
              fontSize={{ base: 'xs', sm: 'md' }}
              disabled
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
              <Button px={0} leftIcon={<FaTwitter />} border={0}>
                Twitter
              </Button>
            </a>
            <a href="https://discord.gg/protocolX" target="_blank" rel="noreferrer">
              <Button px={0} leftIcon={<FaDiscord />} border={0}>
                Discord
              </Button>
            </a>
            <a href="https://t.me/ptx_protocolx" target="_blank" rel="noreferrer">
              <Button px={0} leftIcon={<FaTelegramPlane />} border={0}>
                Telegram
              </Button>
            </a>
            <a
              href="https://www.youtube.com/channel/UCaxXFz8aQkyQnqEMdNrkUxw"
              target="_blank"
              rel="noreferrer"
            >
              <Button px={0} leftIcon={<FaYoutube />} border={0}>
                Youtube
              </Button>
            </a>
            <a href="mailto:info@protocol-x.io" target="_blank" rel="noreferrer">
              <Button px={0} leftIcon={<FaEnvelope />} border={0}>
                Mail
              </Button>
            </a>
          </VStack>
        </Grid>
      </Flex>
      <Divider className=""></Divider>
      <HStack px={'5%'} w={'full'} bgColor={'#000305'} justifyContent={'space-between'}>
        <Text fontSize={'x-small'}>
          COPYRIGHT © 2022 - PROTOCOLX |{/*  Terms & Conditions | */} designed by woxcreativedesign
        </Text>
        <Box>
          <a href="https://t.me/ProtocolX_PTX" target="_blank" rel="noreferrer">
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
          <a
            href="https://www.youtube.com/channel/UCaxXFz8aQkyQnqEMdNrkUxw"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Youtube"
              icon={<FaYoutube />}
            />
          </a>
          <a href="https://medium.com/@ProtocolXDeFi" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Medium"
              icon={<FaMedium />}
            />
          </a>
          <a href="https://www.assuredefi.io/projects/protocolx/" target="_blank" rel="noreferrer">
            <IconButton
              border={0}
              color={'#202932'}
              fontSize={'2xl'}
              aria-label="Medium"
              icon={<AssureIcon />}
            />
          </a>

          {/*           <a href="" target="_blank" rel="noreferrer">
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
          </a> */}
        </Box>
      </HStack>
    </Box>
  );
}
