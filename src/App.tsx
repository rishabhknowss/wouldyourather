import { useState } from 'react';
import './App.css';
import logo from './assets/wouldyourather.jpg';
import { Left } from './components/Left';
import { Right } from './components/Right';

function App() {
  const [leftOption, setLeftOption] = useState(0);
  const [rightOption, setRightOption] = useState(0);

  const handleOptionsChange = () => {
    setLeftOption(prevOption => (prevOption + 1) % leftOptions.length);
    setRightOption(prevOption => (prevOption + 1) % rightOptions.length);
  };

  const leftOptions = [
    'Frontend Development',
    'SQL DATABASE',
    'DOCKER',
    'STARTUPS',
    'VS CODE'
  ];

  const rightOptions = [
    'Backend Development',
    'NOSQL DATABASE',
    'KUBERNETES',
    'FAANG',
    'VIM'
  ];

  return (
    <>
      <div className="flex justify-center text-white bg-black py-4">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-md" />
        <h1 className="text-xl font-bold flex flex-col justify-center mx-2">Would you rather</h1>
      </div>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col justify-center text-center bg-blue-400 text-2xl font-bold" onClick={handleOptionsChange}>
          <Left option={leftOptions[leftOption]} />
        </div>
        <div className="flex flex-col justify-center text-center bg-red-400 text-2xl font-extrabold" onClick={handleOptionsChange}>
          <Right option={rightOptions[rightOption]} />
        </div>
      </div>
    </>
  );
}

export default App;
