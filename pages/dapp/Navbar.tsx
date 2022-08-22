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
    path: '/',
    isExternal: true,
  },
  {
    label: 'ABOUT US',
    path: '/about',
    isExternal: false,
  },
  {
    label: 'CHART',
    path: 'https://dexscreener.com/fantom/0x5c253890b145ba1d3fc3a71699d8431210a879c0000200000000000000000503-0x04068da6c83afcfa0e13ba15a6696662335d5b75-0x08d70a47d3f28bbf755ae050a783844b40ae5761',
    isExternal: true,
  },
  {
    label: 'BUY $PTX',
    path: 'https://beets.fi/#/trade/0x04068da6c83afcfa0e13ba15a6696662335d5b75/0x08d70A47D3f28BbF755ae050a783844b40ae5761',
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
