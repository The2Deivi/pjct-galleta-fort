
const Phrase = ({ phraseSelected }) => {
    
  return (
    <p className="py-5 px-5 "><span className="font-bold font-serif italic">"{phraseSelected.phrase}"</span><h3 className="py-3 font-mono line-clamp-3 text-right">~ {phraseSelected.author} ~</h3></p>
    
  )
}

export default Phrase