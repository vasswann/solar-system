import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Demo from './components/Demo';
import Header from './components/Header';
import Planets from './components/Planets';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5173/solarSystem.json')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* <Demo /> */}
      <Header onClick={handleClick} />
      <Planets data={data} smothScroll={ref} />
      <Footer />
    </>
  );
}

export default App;
