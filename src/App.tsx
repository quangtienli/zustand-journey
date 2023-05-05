import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BearCounter from './components/BearCounter';
import FishCounter from './components/FishCounter';
import PandaCounter from './components/PandaCounter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <BearCounter />
      <FishCounter />
      <PandaCounter />
    </>
  );
}

export default App;
