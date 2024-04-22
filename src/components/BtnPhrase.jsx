import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({ setPhraseSelected, setBgSelected }) => {

    const changePhrase = () => {
        const indexRandom = getRandomNumber(quotes.length)
        setPhraseSelected(quotes[indexRandom])
        setBgSelected(photos[getRandomNumber(photos.length)])
    }

  return (
    <button className="border-solid border-2  font-semibold rounded-full ml-auto cursor-pointer py-1 px-5 text-black bg-[aqua] shadow-lg border-blue-900/50 shadow-blue-900/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:brightness-200 hover:bg-amber-500/50 hover:border-amber-500 hover:shadow-amber-500" onClick={changePhrase}>Ver otra</button>
  )
}

export default BtnPhrase