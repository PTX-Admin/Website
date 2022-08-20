import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import HomePage from '../../components/Home';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Home | Protocol X</title>
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
        <VStack w="full" overflow={'hidden'}>
          <HomePage></HomePage>
        </VStack>
        <Footer />
      </VStack>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Home;
