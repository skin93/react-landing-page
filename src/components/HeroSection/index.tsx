import React, { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroSection.style';
import Video from '../../videos/video.mp4';
import { useCallback } from 'react';
import { Button } from '../shared/Button.style';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = useCallback(() => {
    setHover(!hover);
  }, [hover]);
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted>
          <source src={Video} type='video/mp4' />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign Up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
