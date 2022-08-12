import { Image } from '@chakra-ui/react';
import styles from './HomeTreasury.module.css';
import treasure from '../../Assets/home/treasury/treasure.svg';

export default function HomeTreasury() {
  return (
    <div className={styles.treasury} style={{ marginTop: '0px' }}>
      <div data-aos="fade-top" className={styles.textPart}>
        <h3>Belief</h3>
        <h1>
          Protocol<span className={styles.red}>X Treasury</span>
        </h1>
      </div>
      <div className={styles.textRow} data-aos={'fade-right'} data-aos-delay={200}>
        <h4>{'INVESTMENT'}</h4>
        <p>
          {
            'The ProtocolX Treasury will be invested in various DeFi protocols with varying levels of risk in addition to being reinvested back directly into the ProtocolX parent company in order to maintain everlasting growth of the entirety of the protocol.'
          }
        </p>
      </div>
      <div className={styles.textRow} data-aos={'fade-right'} data-aos-delay={400}>
        <h4>{'PROFITS'}</h4>
        <p>
          {
            'Profits generated from the ProtocolX treasury investments are reinvested back into the treasury, utilized for buybacks/burned, and utilized directly to facilitate additional growth of the protocol'
          }
        </p>
      </div>

      <Image
        data-aos={'fade-left'}
        data-aos-delay={600}
        className={styles.orb}
        fallbackSrc={treasure.blurDataURL}
        src={treasure.src}
        alt=""
      />
      <div className={styles.textRow} data-aos={'fade-left'} data-aos-delay={800}>
        <h4>{'AUTOMATIC LIQUIDITY ROUTER'}</h4>
        <p>
          {
            'Liquidity Pairs are very important for maintaining the fundamental aspects of the token and controlling price movement. Due to this being such an important aspect, 20% of pre-sale funds (in BNB) will be distributed to Liquidity Pool for Day 1.'
          }
        </p>
      </div>
    </div>
  );
}
