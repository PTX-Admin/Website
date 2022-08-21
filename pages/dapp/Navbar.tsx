import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Link,
  useBreakpointValue,
  Text,
} from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { link } from 'fs';
import * as React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import logo from '../../Assets/dapp/logo.png';

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
      </Flex>
    </>
  );
};

const LinkItem = ({ path, label, isExternal }: ILink) => {
  return (
    <Link href={path} display="flex" alignItems={'center'} isExternal={isExternal}>
      <HStack>
        <Text fontWeight={500}>{label}</Text>
        {isExternal && <BiLinkExternal />}
      </HStack>
    </Link>
  );
};
