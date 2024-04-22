import { useState } from 'react'
import quotes from './data/phrases.json'
import photos from "./data/photos.json";
import getRandomNumber from './utils/getRandomNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'

function App() {

  const indexRandom = getRandomNumber(quotes.length)
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])
  const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)])

  const objStyle = {
    backgroundImage: `url(/images/fondo${bgSelected}.jpg)`
  }
  
  return (
    <div className='min-h-screen flex justify-center items-center bg-cover bg-center' style={objStyle}>
      <h1 className='p-4 bg-[aqua] text-[#1C2833] absolute top-14 text-3xl uppercase font-extrabold text-center underline bg-opacity-75 decoration-amber-500 shadow-xl rounded-xl shadow-blue-500/50'><span className='text-amber-500'>G</span>alleta de la <span className='text-amber-500'>f</span>ortuna</h1>

      <articule className='max-w-md mt-12 p-6 bg-[aqua] bg-opacity-65 text-center shadow-xl rounded-3xl shadow-blue-900/50'>
        <Phrase 
          phraseSelected={phraseSelected}
        />
        <BtnPhrase 
          setPhraseSelected={setPhraseSelected}
          setBgSelected={setBgSelected}
        />
      </articule>
    </div>
  )
}

export default App
