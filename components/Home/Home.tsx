import HomeHeader from '../HomeHeader/HomeHeader';
import 'aos/dist/aos.css';
import styles from './Home.module.css';

import HomeWorks from '../HomeWorks';
import HomeModel from '../HomeModel';
import HomeBoxes1 from '../HomeBoxes1';
import HomeBoxes2 from '../HomeBoxes2';
import HomeTreasury from '../HomeTreasury';
import HomeTokenomics from '../HomeTokenomics';
import HomeFAQ from '../HomeFAQ';
import HomeRoadmap from '../HomeRoadmap';
import SimpleSlider from '../HomePartners';

export default function Home() {
  return (
    <>
      <div className={styles.heroBg}>
        <HomeHeader />
        <HomeWorks />
      </div>
      <HomeModel />
      <HomeBoxes1 />
      <HomeBoxes2 />
      <HomeTreasury />
      <HomeTokenomics />
      <SimpleSlider />
      <HomeFAQ />
      <HomeRoadmap />
    </>
  );
}
