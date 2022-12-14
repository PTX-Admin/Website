import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import PresaleEpoch from '../../components/Presale/PresaleEpoch';
import PresaleHeader from '../../components/Presale/PresaleHeader';
import PresaleProgress from '../../components/Presale/PresaleProgress';
import PresaleProjectInfo from '../../components/Presale/PresaleProjectInfo';
import PresalePurchase from '../../components/Presale/PresalePurchase';
import 'react-toastify/dist/ReactToastify.css';
import { palette } from '../../styles/palette';
import Head from 'next/head';
import BuiltBySolar from '../../components/BuiltBySolar';
import Navbar from '../../components/Navbar';
import PresaleCountdown from '../../components/Presale/PresaleCountdown';
import Footer from '../../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Presale | Protocol X</title>
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
