import React from 'react';
import styles from './HomeBoxes1.module.css';
import { Image } from '@chakra-ui/react';
import bulb from '../../Assets/home/boxes/bulb.png';
import circle1 from '../../Assets/home/boxes/circle1.svg';
import circle2 from '../../Assets/home/boxes/circle2.svg';

export default function HomeBoxes() {
  return (
    <div className={styles.boxCont}>
      <div className={styles.row}>
        <Image fallbackSrc={bulb.blurDataURL} src={bulb.src} className={styles.bulb} alt="" />
        <div data-aos={'fade-right'} className={styles.box}>
          <div className={styles.wrapper}>
            <Image
              className={'bounce'}
              fallbackSrc={circle1.blurDataURL}
              src={circle1.src}
              alt=""
            />
            <h1>
              {'PROTOCOL'}
              <span className={styles.red}>{'X BUYBACK'}</span>
            </h1>
            <p>
              {
                'The entirety of all PxBB (ProtocolX Buy Back) funds go to buybacks of X-Share NFTs and the PTX token, providing them both with a direct deflationary pressure.'
              }
            </p>
          </div>
        </div>
        <div data-aos={'fade-left'} className={styles.box}>
          <div className={styles.wrapper}>
            <Image className={'shake'} fallbackSrc={circle2.blurDataURL} src={circle2.src} alt="" />
            <h1>
              {'X'}
              <span className={styles.red}>{'SHARE'}</span>
            </h1>
            <p>
              {
                "Owning a ProtocolX NFT chest (XShare) is your direct share to the company's revenue stream as a whole. This includes a revenue share model from the NFT Marketplace, ProtocolX, and any other future developments under the ProtocolX umbrella."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
