import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import PresaleEpoch from '../../components/PresaleEpoch';
import PresaleHeader from '../../components/PresaleHeader';
import PresaleProgress from '../../components/PresaleProgress';
import PresaleProjectInfo from '../../components/PresaleProjectInfo';
import PresalePurchase from '../../components/PresalePurchase';
import 'react-toastify/dist/ReactToastify.css';
import { palette } from '../../styles/palette';
import Head from 'next/head';
import BuiltBySolar from '../../components/BuiltBySolar';
import Navbar from '../../components/Navbar';
import PresaleCountdown from '../../components/PresaleCountdown';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Presale | Protocol X</title>
      </Head>

      <VStack
        style={{ marginTop: '4rem', marginBottom: '4rem' }}
        w="80%"
        p={'5%'}
        gap={4}
        rounded="2xl"
        backgroundColor={'rgba(0,0,0,0.6)'}
        backdropFilter="auto"
        backdropBlur={'5px'}
      >
        <PresaleCountdown />
        <PresaleProgress />
        <PresaleEpoch />
        <PresalePurchase />
        {/* <PresaleProjectInfo /> */}
      </VStack>
      <BuiltBySolar />
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
