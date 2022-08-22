import {
  Button,
  color,
  HStack,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  Stack,
  Collapse,
  IconButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import DexscreenerLogo from '../../Assets/dapp/DexscreenerLogo';
import { motion } from 'framer-motion';
import { ITab, tabKeys, tabs } from '../../pages/dapp';

interface ISidebarProps {
  selectedTab: ITab;
  setSelectedTab: Dispatch<SetStateAction<ITab>>;
}

interface ISidebarItemProps {
  tab: ITab;
  selectedTab: ITab;
  setSelectedTab: Dispatch<SetStateAction<ITab>>;
}
export default function Sidebar({ selectedTab, setSelectedTab }: ISidebarProps) {
  const { getButtonProps, getDisclosureProps, isOpen, onClose, onOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  return (
    <Stack
      direction={{ '2xl': 'column', base: 'row' }}
      w="full"
      alignItems={'start'}
      justifyContent="space-between"
      pt={{ base: 0, '2xl': 0 }}
      gap={{ base: 8, '2xl': 0 }}
    >
      <Stack
        display={{ base: 'none', xl: 'flex' }}
        justifyContent={'space-between'}
        direction={{ base: 'column', xl: 'row', '2xl': 'column' }}
        w="full"
        alignItems={'start'}
        spacing={4}
        pt={4}
      >
        {tabKeys.map((val) => (
          <SidebarItem
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tab={tabs[val]}
            key={val}
          />
        ))}
      </Stack>
      <Box style={{ width: '100%' }} display={{ xl: 'none' }} py={4}>
        <IconButton
          fontSize={'xl'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
        />
        <motion.div
          {...getDisclosureProps()}
          hidden={hidden}
          initial={false}
          onAnimationStart={() => setHidden(false)}
          onAnimationComplete={() => setHidden(!isOpen)}
          animate={{ width: isOpen ? '100%' : 0 }}
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            borderBottom: '2px solid white',
            padding: '16px 0px 16px 0px',
          }}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            w={'full'}
            justifyContent={'space-between'}
          >
            <Stack
              justifyContent={'space-between'}
              direction={{ base: 'column', xl: 'row' }}
              w="full"
              alignItems={'start'}
              spacing={4}
            >
              {tabKeys.map((val) => (
                <SidebarItem
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                  tab={tabs[val]}
                  key={val}
                />
              ))}
            </Stack>
            <VStack px={4} spacing={4} fontWeight={'bolder'} alignItems={'start'}>
              <Link>
                <HStack>
                  <FaDiscord size="36px" />
                  <Text fontSize={'24px'}>DISCORD</Text>
                </HStack>
              </Link>
              <Link>
                <HStack>
                  <FaTwitter size="36px" />
                  <Text fontSize={'24px'}>TWITTER</Text>
                </HStack>
              </Link>
              <Link>
                <HStack>
                  <DexscreenerLogo w="30px" />
                  <Text fontSize={'24px'}>DEX</Text>
                </HStack>
              </Link>
            </VStack>
          </Stack>
        </motion.div>
      </Box>
      <VStack display={{ base: 'none', xl: 'flex' }}>
        <Text fontWeight={'extrabold'}>LINKS</Text>
        <HStack>
          <Link>
            <FaDiscord size="36px" />
          </Link>
          <Link>
            <FaTwitter size="36px" />
          </Link>
          <Link>
            <DexscreenerLogo w="30px" />
          </Link>
        </HStack>
      </VStack>
    </Stack>
  );
}

function SidebarItem({ tab, selectedTab, setSelectedTab }: ISidebarItemProps) {
  return (
    <Button
      variant={'ghost'}
      onClick={() => setSelectedTab(tab)}
      w="fit-content"
      transition="all .5 ease-in-out"
      color={selectedTab === tab ? 'rgba(187, 0, 0, 1)' : 'white'}
      _hover={{
        color: 'rgba(187, 0, 0, 1)',
      }}
    >
      <HStack w="full" alignItems="start" spacing={4} fontSize={'36px'}>
        {tab.icon}
        <Text fontSize={'24px'} fontWeight={700}>
          {tab.label}
        </Text>
      </HStack>
    </Button>
  );
}
