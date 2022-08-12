import { Heading, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About us | Protocol X</title>
      </Head>

      <VStack minH="90vh" justifyContent={'center'}>
        <Heading>This page is under construction, come back in a couple days.</Heading>
      </VStack>
    </>
  );
};

export default Home;
