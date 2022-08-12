import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import assure from '../../Assets/home/partners/assure.png';
import ego from '../../Assets/home/partners/ego.png';
import mdb from '../../Assets/home/partners/mdb.png';
import newshari from '../../Assets/home/partners/newshari.png';
import silver from '../../Assets/home/partners/silver.png';
import bg from '../../Assets/home/partners/partnersbg.jpg';

export default function SimpleSlider() {
  return (
    <Box>
      <Text textAlign={'center'} fontWeight={600} lineHeight={'63px'} fontSize={'42px'}>
        PARTNERSHIPS
      </Text>
      <HStack maxWidth={'80vw'}>
        <Carousel
          showArrows={false}
          autoPlay
          infiniteLoop
          showIndicators={false}
          showStatus={false}
        >
          <Flex>
            <Image objectFit={'contain'} maxW={'50%'} src="./solar.png" alt="" />
            <Image
              objectFit={'contain'}
              maxW={'50%'}
              src={assure.src}
              fallbackSrc={assure.blurDataURL}
              alt=""
            />
          </Flex>
          <Flex>
            <Image
              objectFit={'contain'}
              maxW={'50%'}
              src={ego.src}
              fallbackSrc={ego.blurDataURL}
              alt=""
            />

            <Image
              objectFit={'contain'}
              maxW={'50%'}
              src={mdb.src}
              fallbackSrc={mdb.blurDataURL}
              alt=""
            />
          </Flex>
          <Flex>
            <Image
              objectFit={'contain'}
              maxW={'50%'}
              src={newshari.src}
              fallbackSrc={newshari.blurDataURL}
              alt=""
            />
            <Image
              objectFit={'contain'}
              maxW={'50%'}
              src={silver.src}
              fallbackSrc={silver.blurDataURL}
              alt=""
            />
          </Flex>
        </Carousel>
      </HStack>
    </Box>
  );
}
