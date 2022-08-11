import { Heading, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import HomePage from '../components/Home';
import PresaleEpoch from '../components/PresaleEpoch';
import PresaleHeader from '../components/PresaleHeader';
import PresaleProgress from '../components/PresaleProgress';
import PresaleProjectInfo from '../components/PresaleProjectInfo';
import PresalePurchase from '../components/PresalePurchase';
import 'react-toastify/dist/ReactToastify.css';
import { palette } from '../styles/palette';
import Head from 'next/head';
import BuiltBySolar from '../components/BuiltBySolar';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import AOS from 'aos';

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

      <VStack w="full">
        <HomePage></HomePage>
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
