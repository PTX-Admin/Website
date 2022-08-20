import { Box, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { triangleOptions } from '../styles/particles';
import bg from '../Assets/landing/bg.png';
import logo from '../Assets/landing/logo.png';
import coins from '../Assets/landing/coins.png';
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import useMounted from '../hooks/useMounted';
import styles from './Home.module.css';

const Home: NextPage = () => {
  const particlesInit = useCallback(async (engine: any) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <>
      <Head>
        <title>Welcome | Protocol X</title>
      </Head>
      <Box
        w="full"
        h="100vh"
        position={'fixed'}
        backgroundImage={coins.src}
        backgroundSize="contain"
        backgroundRepeat={'no-repeat'}
        backgroundPosition="right"
        blendMode={'color-dodge'}
        zIndex={0}
      />
      <Box
        w="full"
        h="100vh"
        position={'fixed'}
        backgroundImage={bg.src}
        backgroundSize="cover"
        backgroundRepeat={'no-repeat'}
        zIndex={-1}
      >
        <Particles id="tsparticles" init={particlesInit} options={triangleOptions} />
      </Box>
      <VStack w="full" h="100vh" zIndex={1} justifyContent="center" position={'fixed'}>
        <Image
          src={logo.src}
          objectFit="contain"
          className={styles.floating}
          w={{ base: '90%', md: '50%', xl: '25%' }}
        />
      </VStack>
      <VStack w="full" h="100vh" zIndex={1} justifyContent="center" position={'fixed'}>
        <Text fontSize={{ base: '26px', md: '64px' }} fontWeight={900}>
          ENTER THE PROTOCOL
        </Text>
      </VStack>
      <VStack w="full" h="100vh" zIndex={1} justifyContent="end" position={'fixed'}>
        <HStack
          w={{ base: '90%', md: '50%', xl: '25%' }}
          justifyContent="space-between"
          pb={8}
          fontSize={{ base: 20, md: 26 }}
          fontWeight={700}
        >
          <Link href="/dapp">
            <HStack>
              <FaMobileAlt color="DE0000" />
              <Text>APP</Text>
            </HStack>
          </Link>
          <Link href="/home">
            <HStack>
              <AiOutlineHome color="DE0000" />
              <Text>HOME</Text>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </>
  );
};

export default Home;
