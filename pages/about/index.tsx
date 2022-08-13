import { Heading, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import AboutUs from '../../components/AboutUs';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About us | Protocol X</title>
      </Head>

      <VStack minH="90vh" justifyContent={'center'}>
        <AboutUs />
      </VStack>
    </>
  );
};

export default Home;
