import { useState } from 'react';
import styles from './Footer.module.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Footer = () => {
  const [timeing, setTimeing] = useState(false);
  const {
    footer,
    moon,
    spaceShip,
    fromMoon,
    paragraph,
    typeText,
    typeTextNoShow,
  } = styles;
  return (
    <>
      <div className={footer}>
        <AnimationOnScroll animateIn='animate__slideInLeft' duration={5}>
          <div className={moon}></div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn='animate__zoomInRight'
          duration={8}
          afterAnimatedIn={function afterAnimatedIn(x) {
            if (x.onScreen) {
              setTimeing(() => true);
            }
          }}
        >
          <div className={spaceShip}></div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRightBig' duration={7}>
          <div className={fromMoon}></div>
        </AnimationOnScroll>
        <div className={timeing ? typeText : typeTextNoShow}>
          <p className={paragraph}>
            We have arrived at the edge of our solar system. Swann!
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
