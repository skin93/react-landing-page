import React, { useState, useCallback } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSectiom';
import {
  homeObjFive,
  homeObjFour,
  homeObjOne,
  homeObjSix,
  homeObjThree,
  homeObjTwo,
} from '../components/InfoSectiom/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
    </>
  );
};

export default Home;
