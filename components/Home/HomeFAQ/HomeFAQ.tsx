import { useState } from 'react';
import styles from './HomeFAQ.module.css';
import { Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import cube from '../../../Assets/home/FAQ/cubes.svg';

export default function HomeFAQ() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState(Array(8).fill(false));

  //function to check which faq is opened
  const clickHandler = (e: any) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.headingDiv}>
        <h1>
          <span className={styles.red}>F</span>REQUENLY <span className={styles.red}>A</span>SKED{' '}
          <span className={styles.red}>Q</span>UESTION
        </h1>
        <Image fallbackSrc={cube.blurDataURL} src={cube.src} className={styles.cube} alt="" />
      </div>
      <div className={styles.faqDiv}>
        <div className={styles.faqQDiv}>
          <div
            data-num={1}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[1] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[1] ? styles.activeBtn : ''}`}>
              How will ProtocolX be different than the other rebase-style protocols?
            </p>
            <FontAwesomeIcon
              className={`${open[1] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[1] ? styles.active : ''}`}>
            <p className={styles.answer}>
              ProtocolX understands the main issues that rebase and auto-staking protocols have run
              into. Generally speaking, inflation and lack of innovation and growth lead to an
              eventual demise. Here at ProtocolX, we actively combat inflationary aspects on
              multiple fronts, innovate and adapt to DeFi trends with growth aspects (farms/pools,
              staking, DEX, XShares), and will advance the ecosystem with multiple and diverse
              cryptocurrency and real-world innovations.
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={2}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[2] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[2] ? styles.activeBtn : ''}`}>How will you burn tokens?</p>
            <FontAwesomeIcon
              className={`${open[2] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[2] ? styles.active : ''}`}>
            <p className={styles.answer}>
              ProtocolX will implement token burns by various mechanisms. From the beginning, a
              portion of all buy and sales fees go into a pool that is 100% utilized to conduct
              burns. As the protocol develops, there will be a lottery system for token burns, NFT
              mechanism for token burns, investment/bot trading strategy for token burns, and manual
              token burns from the team/treasury.
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={3}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[3] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[3] ? styles.activeBtn : ''}`}>
              How can you help the token price be sustainable?
            </p>
            <FontAwesomeIcon
              className={`${open[3] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[3] ? styles.active : ''}`}>
            <p className={styles.answer}>
              ProtocolX is inherently an inflationary token, as it does not have a fixed supply and
              rebases add to the total supply. By utilizing burns and the Sustainability Emissions
              Model (APR decreases by 10% per month for 12 months until it hits a .5% daily APR),
              ProtocolX is able to put a positive price pressure action on the token price.
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={4}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[4] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[4] ? styles.activeBtn : ''}`}>
              What is the benefit of having a XShare NFT?
            </p>
            <FontAwesomeIcon
              className={`${open[4] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[4] ? styles.active : ''}`}>
            <p className={styles.answer}>
              XShare NFTs are your way to get a piece of the revenue from all aspects of ProtocolX,
              now and into the future. From the rebase protocol, 2% of the buy fees and 2% of the
              sales fee go directly to a pool that is distributed to XShare NFT holders. As this
              protocol grows and we create additional revenue streams, XShares will continue to
              increase in their reward potential overtime.
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={5}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[5] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[5] ? styles.activeBtn : ''}`}>How do I begin?</p>
            <FontAwesomeIcon
              className={`${open[5] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[5] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Getting involved in ProtocolX is quite simple! Ensure you are connected to the Binance
              Smart Chain, enter our XSWAP dex or the contract address on PancakeSwap, and set
              slippage to 15% for buys and 20% for sales, and exchange BNB or BUSD for PTX.
            </p>
          </div>
        </div>
        {
          // when you add a new faq make sure to increment the value in the brackets
        }
      </div>
    </div>
  );
}
