import { Box, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FaHome } from 'react-icons/fa';
import bg from '../../Assets/landing/bg.png';
import useMounted from '../../hooks/useMounted';
import Dashboard from './Dashboard';
import { Navbar } from './Navbar';

interface ITab {
  label: string;
  icon: React.ReactNode;
}
const tabs: ITab[] = [
  {
    label: 'DASHBOARD',
    icon: <FaHome />,
  },
];

const Home: NextPage = () => {
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
      />
      <Navbar />
      <VStack w="full" alignContent={'start'} px={'10%'}></VStack>
    </>
  );
};

export default Home;
