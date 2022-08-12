import styles from './HomeTokenomics.module.css';
import { Image } from '@chakra-ui/react';
import coin from '../../Assets/home/tokenomics/coin.svg';

export default function HomeTokenomics() {
  return (
    <div className={styles.tokenCont}>
      <Image fallbackSrc={coin.blurDataURL} src={coin.src} className={styles.coin} alt="" />
      <div className={styles.token}>
        <div data-aos="fade-right" className={styles.leftToken}>
          <h1 className={styles.tokenHead}>
            Tokenomics of <span className={styles.white}>Procotol</span>X
          </h1>
          <div className={styles.tableWrapper}>
            <div className={styles.tableGrid}>
              <div className={styles.tableMain}></div>
              <p className={styles.tableHead}>Tokenomics</p>
              <p className={styles.tableMain}>Initial token supply</p>
              <p className={styles.tableDesc}>
                PTX will have a variable supply, meaning it will continue to increase with the
                rebase token model.
              </p>
              <p className={styles.tableMain}>Max Supply</p>
              <p className={styles.tableDesc}>There is no max supply for PTX built in at launch.</p>
              <p className={styles.tableMain}>Growing Protocol</p>
              <p className={styles.tableDesc}>
                Allowing the token to have positive price action pressure is very important to the
                long-term
              </p>
              <p className={styles.tableMain}>Price Action</p>
              <p className={styles.tableDesc}>
                ProtocolX will solve this potential inflationary conflict via multiple means:
                Buy/Sale fees that support the token and protocol / ProtocolX Buyback Burn system /
                Sustainable Emissions Model (SEM) (10% reduction in APY each month) /
              </p>
              <p className={styles.tableMain}>Buy Fees</p>
              <p className={styles.tableDesc}>
                Buys Fees: 13%: 3% to BBB fund 3% to Liquidity 5% to Treasury 2% to XShare
              </p>
              <p className={styles.tableMain} style={{ borderBottom: 'none' }}>
                Sell Fees
              </p>
              <p className={styles.tableDesc}>
                Sell Fees: 18%: 3% to BBB fund 5% to Liquidity 8% to Treasury 2% to XShares
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className={styles.rightToken} style={{ zIndex: 99 }}>
          <h1 className={styles.tokenHead}>
            Distribution<span className={styles.white}> of Tokens</span>
          </h1>
          <div className={styles.tableWrapper}>
            <div className={styles.tableGrid}>
              <p className={styles.tableMain}>Initial supply</p>
              <p className={styles.tableDesc}>50m PTX</p>
              <p className={styles.tableMain}>Liquidity Tokens</p>
              <p className={styles.tableDesc}>15m PTX</p>
              <p className={styles.tableMain}>Pre-Sale Allocation</p>
              <p className={styles.tableDesc}>20m PTX</p>
              <p className={styles.tableMain}>Team Distribution</p>
              <p className={styles.tableDesc}>5m PTX</p>
              <p className={styles.tableMain}>ProtocolX NFT holder allocation</p>
              <p className={styles.tableDesc}>5m PTX</p>
              <p className={styles.tableMain} style={{ borderBottom: 'none' }}>
                Treasury Allocation (Marketing)
              </p>
              <p className={styles.tableDesc}>5m PTX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
