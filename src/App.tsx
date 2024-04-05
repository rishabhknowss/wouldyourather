import './App.css';
import logo from './assets/wouldyourather.jpg'

function App() {
  return (
    <>
      <div className=" flex justify-center text-white bg-black py-4">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-md " />
        <h1 className="text-xl font-bold flex flex-col justify-center mx-2">Would you rather</h1>
      </div>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col justify-center text-center bg-blue-400 text-2xl font-bold">
          Have Devin work
        </div>
        <div className="flex flex-col justify-center text-center bg-red-400 text-2xl font-extrabold">
          ChatGPT yourself
        </div>
      </div>
    </>
  );
}

export default App;
