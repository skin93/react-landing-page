import React, { useState, useCallback } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSectiom';
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
      <HeroSection/>
      <InfoSection/>
    </>
  );
};

export default Home;
