import { useState } from 'react';
import styles from './HomeFAQ.module.css';
import { Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import cube from '../../Assets/home/FAQ/cubes.svg';

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
    <div data-aos="zoom-out-down" id="faq" className={styles.faq}>
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
            data-num={0}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[0] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[0] ? styles.activeBtn : ''}`}>
              Where to join ProtocolX Community?
            </p>
            <FontAwesomeIcon
              className={`${open[0] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[0] ? styles.active : ''}`}>
            <p className={styles.answer}>
              You can join us on our Discord at{' '}
              <a target={'blank'} href="https://www.discord.com/ProtocolX">
                https://www.discord.com/ProtocolX
              </a>
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={1}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[1] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[1] ? styles.activeBtn : ''}`}>How can I buy $PTX?</p>
            <FontAwesomeIcon
              className={`${open[1] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[1] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur perferendis
              tempora ullam. Ratione, recusandae!
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={2}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[2] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[2] ? styles.activeBtn : ''}`}>Is $PTX ready for market?</p>
            <FontAwesomeIcon
              className={`${open[2] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[2] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur perferendis
              tempora ullam. Ratione, recusandae!
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={3}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[3] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[3] ? styles.activeBtn : ''}`}>Is $PTX too good to be true?</p>
            <FontAwesomeIcon
              className={`${open[3] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[3] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur perferendis
              tempora ullam. Ratione, recusandae!
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={4}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[4] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[4] ? styles.activeBtn : ''}`}>Why $PTX?</p>
            <FontAwesomeIcon
              className={`${open[4] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[4] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur perferendis
              tempora ullam. Ratione, recusandae!
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={5}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[5] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[5] ? styles.activeBtn : ''}`}>When launch?</p>
            <FontAwesomeIcon
              className={`${open[5] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[5] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur perferendis
              tempora ullam. Ratione, recusandae!
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={6}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[6] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[6] ? styles.activeBtn : ''}`}>
              What is the $PTX staking & farming?
            </p>
            <FontAwesomeIcon
              className={`${open[6] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[6] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur perferendis
              tempora ullam. Ratione, recusandae!
            </p>
          </div>
        </div>
        <div className={styles.faqQDiv}>
          <div
            data-num={7}
            onClick={clickHandler}
            className={`${styles.faqBtn} ${open[7] ? styles.borderRadius : ''}`}
          >
            <p className={`${open[7] ? styles.activeBtn : ''}`}>Is their buy or sell fees?</p>
            <FontAwesomeIcon
              className={`${open[7] ? styles.activeBtn : ''}`}
              icon={faChevronDown}
            />
          </div>
          <div className={`${styles.faqAnswer} ${open[7] ? styles.active : ''}`}>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur perferendis
              tempora ullam. Ratione, recusandae!
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
