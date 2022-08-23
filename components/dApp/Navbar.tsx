import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Link,
  useBreakpointValue,
  Text,
  IconButton,
  Stack,
  FlexProps,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FiMenu } from 'react-icons/fi';
import { BiWallet } from 'react-icons/bi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import logo from '../../Assets/dapp/logo.png';
import { palette } from '../../styles/palette';

interface ILink {
  label: string;
  path: string;
  isExternal: boolean;
}

const links: ILink[] = [
  {
    label: 'WHITEPAPER',
    path: '/PTX_WP.pdf',
    isExternal: false,
  },
  {
    label: 'ABOUT US',
    path: '/about',
    isExternal: false,
  },
  {
    label: 'CHART',
    path: 'https://dexscreener.com/bsc/0x4f421429e87196df186dc35ec4d35467214d6aa7',
    isExternal: true,
  },
  {
    label: 'BUY $PTX',
    path: 'https://pancakeswap.finance/swap?outputCurrency=0x5Ec500C5C6f0a270b633d5D5f0c3b9eB9b041455',
    isExternal: true,
  },
];

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex justify="space-between" w="full" pt={4} px={{ base: '2.5%', md: '10%' }}>
        <Link href="/">
          <Image src={logo.src} objectFit="contain" w={{ base: '200px', md: '256px' }} />
        </Link>
        <HStack spacing="4">
          {isDesktop && (
            <ButtonGroup variant="link" spacing="8">
              {links.map((val) => (
                <LinkItem
                  key={val.label}
                  path={val.path}
                  label={val.label}
                  isExternal={val.isExternal}
                />
              ))}
              <Box>
                <ConnectButton
                  accountStatus={'address'}
                  showBalance={false}
                  chainStatus={'icon'}
                  label="Connect"
                />
              </Box>
            </ButtonGroup>
          )}
        </HStack>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ lg: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box
          px={{ base: '5%', md: '12%' }}
          py={4}
          display={{ lg: 'none' }}
          borderTop="2px solid white"
        >
          <Stack as={'nav'} spacing={4}>
            {links.map((val) => (
              <LinkItem
                key={val.label}
                path={val.path}
                label={val.label}
                isExternal={val.isExternal}
              />
            ))}
          </Stack>
        </Box>
      </Collapse>
    </>
  );
};

const LinkItem = ({ path, label, isExternal }: ILink) => {
  return (
    <Link href={path} display="flex" alignItems={'center'} isExternal={isExternal}>
      <HStack>
        <Text fontWeight={700}>{label}</Text>
        {isExternal && <BiLinkExternal />}
      </HStack>
    </Link>
  );
};
