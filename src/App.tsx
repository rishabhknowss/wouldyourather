import { useState } from 'react';
import './App.css';
import logo from './assets/wouldyourather.jpg';
import { Left } from './components/Left';
import { Right } from './components/Right';

function App() {
  const [leftOption, setLeftOption] = useState(0);
  const [rightOption, setRightOption] = useState(0);

  const handleOptionsChange = () => {
    alert(`${Math.floor(Math.random() * 100) + 1}% people choose this option`)
    setLeftOption(prevOption => (prevOption + 1) % leftOptions.length);
    setRightOption(prevOption => (prevOption + 1) % rightOptions.length);
  };

  const leftOptions = [
    'Frontend Development',
    'SQL DATABASE',
    'DOCKER',
    'FAANG',
    'LET DEVIN WORK',
    'VS CODE',
    'GCP',
    'WINDOWS',
    'WORK FROM OFFICE'
  ];

  const rightOptions = [
    'Backend Development',
    'NOSQL DATABASE',
    'KUBERNETES',
    'STARTUPS',
    'USE CHATGPT',
    'VIM',
    'AWS',
    'LINUX',
    'REMOTE WORK'

  ];

  return (
    <div className='custom-cursor'>
      <div className="flex justify-center text-white bg-black py-4">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-md" />
        <h1 className="text-xl font-bold flex flex-col justify-center mx-2">Would you rather</h1>
      </div>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col justify-center text-center bg-blue-400 hover:bg-blue-500 text-2xl font-bold" onClick={handleOptionsChange}>
          <Left option={leftOptions[leftOption]} />
        </div>
        <div className="flex flex-col justify-center text-center bg-red-400 hover:bg-red-500 text-2xl font-extrabold" onClick={handleOptionsChange}>
          <Right option={rightOptions[rightOption]} />
        </div>
      </div>
    </div>
  );
}

export default App;