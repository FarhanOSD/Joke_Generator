import React, { useState } from 'react'

function JokeGenerator() {
  const [joke, setJoke] = useState("")
  
  const random_joke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        const fullJoke = `${data.setup} 😎👉 ${data.punchline}`;
        setJoke(fullJoke)
      }).catch( _ => {
        setJoke('Joke is not found 🥱');
      })
    
  }
  return (
    <div className="bg-slate-600 h-200 md:shadow-gray-300 ">
      <p className="mt-5 h-[20px] text-[30px] ">{joke}</p>
      <div className='mt-10'>
        <button
          className="bg-yellow-500 rounded mt-10 w-20 hover:bg-yellow-700 "
          onClick={random_joke}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default JokeGenerator
