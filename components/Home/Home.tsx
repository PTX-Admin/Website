import HomeHeader from './HomeHeader/HomeHeader';
import 'aos/dist/aos.css';
import styles from './Home.module.css';

import HomeWorks from './HomeWorks';
import HomeModel from './HomeModel';
import HomeBoxes1 from './HomeBoxes1';
import HomeBoxes2 from './HomeBoxes2';
import HomeTreasury from './HomeTreasury';
import HomeTokenomics from './HomeTokenomics';
import HomeFAQ from './HomeFAQ';
import HomeRoadmap from './HomeRoadmap';
import SimpleSlider from './HomePartners';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" textTransform="uppercase">
            Security warning
          </DrawerHeader>
          <DrawerBody>
            <p>
              Always ensure that you're in <b>https://protocol-x.io</b>
            </p>
            <p>
              Make sure you're always interacting with{' '}
              <b>0x5Ec500C5C6f0a270b633d5D5f0c3b9eB9b041455</b> when interacting with our dApp
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
