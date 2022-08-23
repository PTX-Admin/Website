import { Box, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FaHome } from 'react-icons/fa';
import { BsSafe2 } from 'react-icons/bs';
import { BiCalculator } from 'react-icons/bi';
import bg from '../../Assets/landing/bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { IPairsResponse } from '../../config/types';
import { Navbar } from '../../components/dApp/Navbar';
import Sidebar from '../../components/dApp/Sidebar';
import TabContainter from '../../components/dApp/TabContainer';

export interface ITab {
  label: string;
  icon: React.ReactNode;
}

interface ITabs {
  [key: string]: ITab;
}

export const tabKeys = ['dashboard', 'vault', 'calculator'];
export const tabs: ITabs = {
  dashboard: {
    label: 'DASHBOARD',
    icon: <FaHome />,
  },
  vault: {
    label: 'THE VAULT',
    icon: <BsSafe2 />,
  },
  calculator: {
    label: 'CALCULATOR',
    icon: <BiCalculator />,
  },
};

export const getServerSideProps = async () => {
  const pairReq = await fetch(
    'https://api.dexscreener.io/latest/dex/pairs/fantom/0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c'
  );
  const pairRes = (await pairReq.json()) as IPairsResponse;
  return {
    props: {
      pair: pairRes,
    },
  };
};

const Home: NextPage = ({ pair }: any) => {
  const [selectedTab, setSelectedTab] = useState<ITab>(tabs['dashboard']);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Dashboard | Protocol X</title>
      </Head>
      <Box
        w="full"
        h="100vh"
        position={'fixed'}
        backgroundImage={bg.src}
        backgroundSize="cover"
        backgroundRepeat={'no-repeat'}
        zIndex={-1}
        overflowY={'scroll'}
      >
        <Navbar />
        <Grid
          h="820px"
          display={{ base: 'none', '2xl': 'grid' }}
          w={{ base: '95%', md: '80%' }}
          mx={{ base: '2.5%', md: '10%' }}
          my={8}
          p={8}
          rounded="xl"
          alignContent={'start'}
          bg="linear-gradient(126.32deg, rgba(166, 0, 0, 0.2) 18.45%, rgba(128, 0, 0, 0.2) 39.01%, rgba(168, 0, 0, 0.2) 59.57%, rgba(61, 0, 0, 0.2) 80.13%);"
          backdropFilter={'auto'}
          backdropBlur="4px"
          border="2px solid"
          borderColor={'rgba(166, 0, 0, 0.2)'}
          templateColumns={{ base: '50% 50%', md: '25% 1fr' }}
        >
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TabContainter tab={selectedTab} pair={pair} />
        </Grid>

        <Flex
          // w="full"
          display={{ base: 'flex', '2xl': 'none' }}
          direction="column"
          w={{ base: '95%', md: '80%' }}
          mx={{ base: '2.5%', md: '10%' }}
          mt={8}
          p={8}
          rounded="xl"
          alignContent={'start'}
          bg="linear-gradient(126.32deg, rgba(166, 0, 0, 0.2) 18.45%, rgba(128, 0, 0, 0.2) 39.01%, rgba(168, 0, 0, 0.2) 59.57%, rgba(61, 0, 0, 0.2) 80.13%);"
        >
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TabContainter tab={selectedTab} pair={pair} />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
