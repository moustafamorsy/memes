
import React , {useEffect, useState} from "react"

function Memes() {

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(memes => setAllMemes(memes.data.memes))
    
    }, [])

 const [allMemes, setAllMemes] = useState([])

 
  const [memes , setMemes] = useState(
    {
      topText:"",
      bottomText:"",
      image: "https://i.imgflip.com/1w7ygt.jpg"
    }
  )

  const {topText, bottomText , image} = memes

  function handleClick(event) {
    event.preventDefault()
    const Rnum = Math.floor(Math.random() * allMemes.length)
    const getmeme = allMemes[Rnum].url
    console.log(getmeme);
    setMemes(prevMemes =>{
      return {
        ...prevMemes,
        image: getmeme
      }
    })
  }
  
  function handleChange (e){
const {name , value} = e.target
setMemes(prevMemes =>{

  return{
    ...prevMemes,
    [name]:value
  }

})
  }

    return(

      <main>
      <div className="form">
          <input   onChange={handleChange}
              type="text"
              placeholder="Top text"
              className="form--input"
              name="topText"
              value={memes.topText}
              
          />
          <input onChange={handleChange}
              type="text"
              placeholder="Bottom text"
              className="form--input"
              name="bottomText"
              value={memes.bottomText}
             
          />
          <button onClick={handleClick}
              className="form--button"
              
          >
              Get a new meme image 🖼
          </button>
      </div>
      <div className="meme">
          <img src={image} className="meme--image" alt="meme" />
          <h2 className="meme--text top">{topText}</h2>
          <h2 className="meme--text bottom">{bottomText}</h2>
      </div>
  </main>


    )
    
}

export default Memes;