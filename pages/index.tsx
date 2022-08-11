import { Heading, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import PresaleEpoch from '../components/PresaleEpoch';
import PresaleHeader from '../components/PresaleHeader';
import PresaleProgress from '../components/PresaleProgress';
import PresaleProjectInfo from '../components/PresaleProjectInfo';
import PresalePurchase from '../components/PresalePurchase';
import ProjectTokenomics from '../components/PresaleTokenomics';
import 'react-toastify/dist/ReactToastify.css';
import { palette } from '../styles/palette';
import Head from 'next/head';
import BuiltBySolar from '../components/BuiltBySolar';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Protocol X</title>
      </Head>

      <VStack w="full" p="5%">
        <Heading>This page is currently being built.</Heading>
        <Heading>Please come back in a couple days.</Heading>
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
