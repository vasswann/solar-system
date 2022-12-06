import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState } from 'react';
import styles from './Demo.module.css';

const Demo = () => {
  const [color, setColor] = useState('green');
  const { pages, pagesHeader } = styles;
  return (
    <>
      <div className={pages}>
        <h1>React Animation On Scroll</h1>
      </div>
      <div className={pages}>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'
          delay={2000}
        >
          <h1 className={pagesHeader}>IN: animate__fadeIn</h1>
        </AnimationOnScroll>
      </div>
      <div className={pages}>
        <AnimationOnScroll
          animateIn='animate__heartBeat'
          initiallyVisible='true'
        >
          <h1 className={pagesHeader}>IN: animate__heartBeat</h1>
        </AnimationOnScroll>
      </div>
      <div className={pages}>
        <AnimationOnScroll
          animateIn='animate__backInDown'
          duration={4}
          style={{ color: 'limegreen' }}
        >
          <h1 className={pagesHeader}>IN: animate__backInDown</h1>
        </AnimationOnScroll>
      </div>
      <div className={pages}>
        <AnimationOnScroll
          animateIn='animate__zoomIn'
          afterAnimatedIn={function afterAnimatedIn(x) {
            if (x.inViewport) {
              setColor('yellow');
            } else if (x.onScreen) {
              console.log('onscreen');
            } else {
              console.log('nothing');
            }
          }}
        >
          <h1 style={{ color }} className={pagesHeader}>
            IN: animate__zoomIn
          </h1>
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Demo;
