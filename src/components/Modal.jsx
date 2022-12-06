import styles from './Modal.module.css';
import ReactDom from 'react-dom';

const Modal = ({ open, onClose, data }) => {
  const {
    background,
    card,
    modalImage,
    modalClose,
    detailsBox,
    detailsImage,
    detailsParagraph,
  } = styles;

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={background}></div>
      <div className={card}>
        <div>
          <div className={modalImage}></div>
          <button className={modalClose} onClick={onClose}>
            X
          </button>
        </div>
        {data !== null ? (
          <>
            <div className={detailsBox}>
              <img className={detailsImage} src={data.image} />
              <div className={detailsParagraph}>
                <h1>{data.name}</h1>
                <p>{data.loc}</p>
                <p>{data.distance}</p>
                <p>- Orbital Period {data.details.orbitalperiod}</p>
                <p>- Length of a day {data.details.lengthofday}</p>
                <p>- Radius {data.details.radius}</p>
                <p>- Gravity {data.details.gravity}</p>
                <p>- Moons: {data.details.moon.map((moon) => moon + ', ')}</p>
                <p>- {data.details.about}</p>
              </div>
            </div>
          </>
        ) : (
          <div>no data</div>
        )}
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
