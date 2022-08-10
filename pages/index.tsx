import { VStack } from '@chakra-ui/react';
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Presale | Void Token</title>
      </Head>
      <PresaleHeader />
      <VStack minH={'99vh'} w="full" p={'5%'} style={{ backgroundColor: palette.background }}>
        <PresaleProgress />
        <PresalePurchase />
        <PresaleEpoch />
        <PresaleProjectInfo />
        <ProjectTokenomics />
        <BuiltBySolar />
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
