import HomeHeader from '../HomeHeader/HomeHeader';
import 'aos/dist/aos.css';
import HomeWorks from '../HomeWorks';
import HomeModel from '../HomeModel';
import HomeBoxes1 from '../HomeBoxes1';
import HomeBoxes2 from '../HomeBoxes2';
import HomeTreasury from '../HomeTreasury';
import HomeTokenomics from '../HomeTokenomics';
import HomeFAQ from '../HomeFAQ';
import HomeRoadmap from '../HomeRoadmap';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeWorks />
      <HomeModel />
      <HomeBoxes1 />
      <HomeBoxes2 />
      <HomeTreasury />
      <HomeTokenomics />
      <HomeFAQ />
      <HomeRoadmap />
    </>
  );
}
