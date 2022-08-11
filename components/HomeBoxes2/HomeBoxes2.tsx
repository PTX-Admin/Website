import React from 'react';
import styles from '../HomeBoxes1/HomeBoxes1.module.css';
import { Image } from '@chakra-ui/react';
import bulb from '../../Assets/home/boxes/bulb.png';
import circle3 from '../../Assets/home/boxes/circle3.svg';
import circle4 from '../../Assets/home/boxes/circle4.svg';

export default function HomeBoxes2() {
  return (
    <div className={styles.boxCont2}>
      <div className={styles.row}>
        <Image fallbackSrc={bulb.blurDataURL} src={bulb.src} className={styles.bulb} alt="" />
        <div data-aos={'fade-right'} className={styles.box}>
          <div className={styles.wrapper}>
            <Image
              className={'bounce'}
              fallbackSrc={circle3.blurDataURL}
              src={circle3.src}
              alt=""
            />
            <h1>
              {'FARMING'}
              <span className={styles.red}>{' & STAKING'}</span>
            </h1>
            <p>
              {
                'We will implement farming and liquidity pools for single-stake XSWAP to earn wPTX, and vice versa. Farm token (XSWAP) with a variable APR to coincide with a fixed emissions rate (5B tokens emitted per year over 10 years, max supply of 50B XSWAP)'
              }
            </p>
          </div>
        </div>
        <div data-aos={'fade-left'} className={styles.box}>
          <div className={styles.wrapper}>
            <Image className={'shake'} fallbackSrc={circle4.blurDataURL} src={circle4.src} alt="" />
            <h1>
              {'X'}
              <span className={styles.red}>{'SWAP'}</span>
            </h1>
            <p>
              {
                'Implement the DEX and platform. This will allow us to utilize fees to conduct buybacks, burns, and other revenue streamlining methods for the advancement of the protocol. We can also directly partner with other protocols, hosting pre-sales and providing a platform for new or established protocols.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
