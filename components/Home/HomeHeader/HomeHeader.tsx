import React, { useCallback, useEffect } from 'react';
import { Button, HStack, Image, Link } from '@chakra-ui/react';
import styles from './HomeHeader.module.css';
import { useRouter } from 'next/router';
import shield from '../../../Assets/home/header/shield.png';
import icon from '../../../Assets/home/header/icon.png';
import circle from '../../../Assets/home/header/circle.png';

function Hero() {
  const router = useRouter();

  return (
    <div className="cont">
      <div className={styles.hero}>
        <div data-aos="fade-right" data-aos-delay={200} className={styles.leftHero}>
          <h1>
            THE FUTURE OF <br /> DECENTRALIZED <br /> FINANCE
          </h1>
          <p>
            ProtocolX is here to change the game by implementing an ever-developing, expanding, and
            growing ecosystem that all feeds into each other.
          </p>
          <HStack alignItems={'center'} justifyContent="center">
            <Button
              as={Link}
              href="https://pancakeswap.finance/swap?outputCurrency=0x5Ec500C5C6f0a270b633d5D5f0c3b9eB9b041455"
              isExternal
              className={styles.ctaBtn}
              m={0}
            >
              Buy $PTX
            </Button>
            <Button as={Link} href="/dapp" className={styles.ctaBtn} m={0}>
              Launch app
            </Button>
          </HStack>
        </div>
        <div className={styles.rightHero}>
          <Image
            fallbackSrc={shield.blurDataURL}
            src={shield.src}
            className={styles.sheild}
            alt=""
          />
          <Image fallbackSrc={circle.blurDataURL} src={icon.src} className={styles.icon} alt="" />
        </div>
        {/* <Image fallbackSrc={circle.blurDataURL} src={circle.src} className={styles.circle} alt="" /> */}
      </div>
    </div>
  );
}

export default Hero;
