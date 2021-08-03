import Car from '../../images/car.svg';
import Pig from '../../images/pig.svg';
import Information from '../../images/information.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Get started',
  imgStart: false,
  img: Car,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Unlimited Access',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Pig,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join Our Team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everythig set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
  buttonLabel: 'Starting Now',
  imgStart: false,
  img: Information,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
