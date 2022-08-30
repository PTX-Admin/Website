import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import assure from '../../../Assets/home/partners/assure.png';
import ego from '../../../Assets/home/partners/ego.png';
import mdb from '../../../Assets/home/partners/mdb.png';
import newshari from '../../../Assets/home/partners/newshari.png';
import silver from '../../../Assets/home/partners/silver.png';
import bg from '../../../Assets/home/partners/partnersbg.jpg';
import chainbet from '../../../Assets/home/partners/chainbet.png';
import bloomify from '../../../Assets/home/partners/bloomify.png';
import avion from '../../../Assets/home/partners/avion.png';
import springgame from '../../../Assets/home/partners/springgame.png';

export default function SimpleSlider() {
  return (
    <Box>
      <Text pb={10} textAlign={'center'} fontWeight={600} lineHeight={'63px'} fontSize={'42px'}>
        PARTNERSHIPS
      </Text>
      <HStack maxWidth={'100vw'}>
        <Carousel
          stopOnHover={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          transitionTime={10000}
        >
          <Flex justifyContent={'space-around'}>
            <Image objectFit={'contain'} maxW={'25%'} src="./solar.png" alt="" />
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={assure.src}
              fallbackSrc={assure.blurDataURL}
              alt=""
            />
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={ego.src}
              fallbackSrc={ego.blurDataURL}
              alt=""
            />
          </Flex>
          <Flex justifyContent={'space-around'}>
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={mdb.src}
              fallbackSrc={mdb.blurDataURL}
              alt=""
            />
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={newshari.src}
              fallbackSrc={newshari.blurDataURL}
              alt=""
            />
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={silver.src}
              fallbackSrc={silver.blurDataURL}
              alt=""
            />
          </Flex>
          <Flex justifyContent={'space-around'}>
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={chainbet.src}
              fallbackSrc={chainbet.blurDataURL}
              alt=""
            />
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={bloomify.src}
              fallbackSrc={bloomify.blurDataURL}
              alt=""
            />
            <Image
              objectFit={'contain'}
              maxW={'25%'}
              src={avion.src}
              fallbackSrc={avion.blurDataURL}
              alt=""
            />
          </Flex>
          <Image
            objectFit={'contain'}
            maxW={'25%'}
            src={springgame.src}
            fallbackSrc={springgame.blurDataURL}
            alt=""
          />
        </Carousel>
      </HStack>
    </Box>
  );
}
