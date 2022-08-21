import {
  Button,
  color,
  HStack,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { ITab, tabKeys, tabs } from '.';
import DexscreenerLogo from '../../Assets/dapp/DexscreenerLogo';

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
  return (
    <VStack
      w="full"
      alignItems={'start'}
      justifyContent="space-between"
      pt={{ base: 8, '2xl': 0 }}
      gap={{ base: 8, '2xl': 0 }}
    >
      <VStack w="full" alignItems={'start'} spacing={4}>
        {tabKeys.map((val) => (
          <SidebarItem
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tab={tabs[val]}
            key={val}
          />
        ))}
      </VStack>
      <VStack>
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
    </VStack>
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
      <HStack w="full" alignItems="start" spacing={4} fontSize="24px">
        {tab.icon}
        <Text fontWeight={700}>{tab.label}</Text>
      </HStack>
    </Button>
  );
}
