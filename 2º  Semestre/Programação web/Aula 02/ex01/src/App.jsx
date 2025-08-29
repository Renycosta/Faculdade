import { useState } from "react"
import './App.css';

function App() {
  const [tenis, setTenis] = useState("tenis-1")

  function img1() {
    setTenis('tenis-1')
  }
  function img2() {
    setTenis('tenis-2')
  }
  function img3() {
    setTenis('tenis-3')
  }


  return (
    <>
      <h1>Calçados Avenida</h1>
      <h2>Veja detalhes do tênis: <span>Olympikus Delta unissex</span></h2>
      <hr />
      <img src={`${tenis}.png`} alt="tenis" className="img-1"/>
      <br />
      <img src="tenis-1.png" alt="tenis-1" onClick={img1}/>
      <img src="tenis-2.png" alt="tenis-2" onClick={img2}/>
      <img src="tenis-3.png" alt="tenis-3" onClick={img3}/>
    </>
  )
}

export default App
