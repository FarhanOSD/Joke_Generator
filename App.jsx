import React from 'react'
import JokeGenerator from './components/JokeGenerator';

function App() {
  return (
    <div className="h-[20000px] bg-slate-500 p-10 text-center border-10 text-black ">
      <div className=" h-[2000px] bg-slate-500 p-10 mt-5 text-center  ">
        <h1 className='text-[50px] text-yellow-500'>Joke</h1>
        <JokeGenerator/>
        
      </div>
    </div>
  );
}

export default App