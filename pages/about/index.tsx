import { Heading, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import AboutUs from '../../components/AboutUs';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About us | Protocol X</title>
      </Head>

      <VStack
        minH={'100vh'}
        w="100vw"
        position="fixed"
        top="0px"
        left="0px"
        zIndex={-1}
        backgroundImage={'url(./bg.jpg)'}
        backgroundSize="cover"
        backgroundAttachment="scroll"
        backgroundRepeat={'no-repeat'}
      ></VStack>
      <VStack minH={'99vh'} w="full" spacing={'0px'}>
        <Navbar />
        <VStack minH="90vh" justifyContent={'center'}>
          <AboutUs />
        </VStack>
        <Footer />
      </VStack>
    </>
  );
};

export default Home;
