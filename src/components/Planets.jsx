import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './Planets.module.css';
import Modal from './Modal';

const Planets = ({ data, smothScroll }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlanet, setModalPlanet] = useState(null);

  const { sectionPlanet, image, card, header, button } = styles;

  return (
    <div ref={smothScroll}>
      {data.length > 0
        ? data.map((planet) => (
            <div key={planet.id} className={sectionPlanet}>
              <AnimationOnScroll animateIn='animate__zoomIn' duration={4}>
                <img className={image} src={planet.image} />
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__slideInUp' duration={3}>
                <div className={card}>
                  <h1 className={header}>{planet.name}</h1>
                  <p>- Distance from the sun {planet.distance}</p>
                  <p>- {planet.loc}...</p>
                  <button
                    className={button}
                    onClick={() => {
                      setModalOpen(true);
                      setModalPlanet(planet);
                    }}
                  >
                    More details
                  </button>
                </div>
              </AnimationOnScroll>
            </div>
          ))
        : 'no data'}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        data={modalPlanet}
      />
    </div>
  );
};

export default Planets;
