import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  Stack,
  Image,
  Text,
  HStack,
  IconButton,
  Collapse,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface ILink {
  label: string;
  path: string;
  link?: string;
}
const Links: ILink[] = [
  {
    label: 'home',
    path: '/',
  },
  {
    label: 'dapp',
    path: '/dapp',
  },
  {
    label: 'presale',
    path: '/presale',
  },
  {
    label: 'whitepaper',
    path: '/PTX_WP.pdf',
  },
  {
    label: 'about us',
    path: '/about',
  },
];
function NavLink({ link }: { link: ILink }) {
  const router = useRouter();
  if (link.link)
    return (
      <Link
        href={link.link}
        target="_blank"
        cursor={'pointer'}
        transition="0.5s"
        _active={{ textDecoration: 'underline', transform: 'translateY(-2px)' }}
        _focus={{ textDecoration: 'underline', transform: 'translateY(-2px)' }}
        _hover={{ textDecoration: 'underline', transform: 'translateY(-2px)' }}
      >
        {link.label.toUpperCase()}
      </Link>
    );
  return (
    <Text
      cursor={'pointer'}
      transition="0.5s"
      _active={{ textDecoration: 'underline', transform: 'translateY(-2px)' }}
      _focus={{ textDecoration: 'underline', transform: 'translateY(-2px)' }}
      _hover={{ textDecoration: 'underline', transform: 'translateY(-2px)' }}
      onClick={() => router.push(link.path, undefined, { shallow: true })}
    >
      {link.label.toUpperCase()}
    </Text>
  );
}

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box px={'5%'} w="full" bgColor="rgba(0,0,0,0.75)" position={'sticky'} top="0%" zIndex={99}>
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'} py={4}>
          <Image
            src="/logo.png"
            alt="ProtocolX Logo"
            objectFit={'contain'}
            cursor={'pointer'}
            maxW={{ base: '100px', md: '256px' }}
            onClick={() => router.push('/', undefined, { shallow: true })}
          />
          <HStack gap={4} fontWeight="bold" fontSize={'lg '} display={{ base: 'none', xl: 'flex' }}>
            {Links.map((val) => (
              <NavLink link={val} key={val.label} />
            ))}
          </HStack>
          <ConnectButton
            accountStatus={'address'}
            showBalance={false}
            chainStatus={'icon'}
            label="Connect"
          />
          {/* <HamburgerIcon display={{ base: 'block', xl: 'none' }} /> */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ xl: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="outline"
          />
          {/* <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex> */}
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box py={4} display={{ xl: 'none' }} borderTop="2px solid white">
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} link={link} />
              ))}
            </Stack>
          </Box>
        </Collapse>
        {/* ) : null} */}
      </Box>
    </>
  );
}
