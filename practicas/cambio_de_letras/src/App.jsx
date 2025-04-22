import { useState } from "react"


function App() {

  const [font, setFont] = useState('')


  const changeFont = (e) => {

    setFont(e.target.innerText.toLowerCase())
  }

  return (

    <>

      <div className="wrapper">
        <div className="letters">
          <p onClick={changeFont} >Dancing Script</p>
          <p onClick={changeFont}>Neue</p>
          <p onClick={changeFont}> Pacifico</p>
        </div>
        <div className= {` lorem ${font} `}  >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, soluta.
        </div>
      </div>
    </>
  )
}

export default App
