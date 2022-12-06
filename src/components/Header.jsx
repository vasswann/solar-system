import styles from './Header.module.css';
import video from '../assets/moons.mp4';

const Header = ({ onClick }) => {
  const { sectionVideo, videoStyle, filter, headerBox, text, span } = styles;
  return (
    <>
      <div className={sectionVideo}>
        <div className={filter}></div>
        <video className={videoStyle} src={video} autoPlay loop muted />
        <div className={headerBox}>
          <h1 onClick={onClick} className={text}>
            Explore
          </h1>
          <h1 onClick={onClick} className={text}>
            <span className={span}>Our</span>
          </h1>
          <h1 onClick={onClick} className={text}>
            Solar System
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
