import { useState } from 'react'
import './App.css'

function App() {
  const [dado_1, setDado_1] = useState("dice (1)")
  const [dado_2, setDado_2] = useState("dice (1)")
  const [info_1, setInfo_1] = useState("7 ou 11: Você Vence")
  const [info_2, setInfo_2] = useState("2, 3 ou 12: Você Perde")

  let win = 0
  function jogar(){
    const num1 = Math.ceil(Math.random()*6)
    const num2 = Math.ceil(Math.random()*6)

    const res = num1 + num2

    if(num1 == 1){
      setDado_1('1')
    } else if (num1 == 2){
      setDado_1('2')
    } else if (num1 == 3){
      setDado_1('3')
    } else if (num1 == 4){
      setDado_1('4')
    } else if (num1 == 5){
      setDado_1('5')
    } else{
      setDado_1('6')
    }

    if(num2 == 1){
      setDado_2('1')
    } else if (num2 == 2){
      setDado_2('2')
    } else if (num2 == 3){
      setDado_2('3')
    } else if (num2 == 4){
      setDado_2('4')
    } else if (num2 == 5){
      setDado_2('5')
    } else{
      setDado_2('6')
    }

    if (win == 0){
      if(res == 7 || res == 11){
        alert("Parabéns você ganhou")
      }else if (res == 2 || res == 3 || res == 12){
        alert("Oh Não você perdeu")
      }else{
        win = 1
        const vit = res
        setInfo_1(`${vit} novamente: Você Vence`)
        setInfo_2("7 Você Perde")
      }
    }else if (win == 1){
      if(res == vit){
        alert("Parabéns você ganhou")
      }else if(res == 7){
        alert("Oh Não você perdeu")
      }
    }

  }

  return (
    <>
      <div className='cabecalho'>
        <img src="dice.png" alt=""/>
        <h1>Craps Game</h1>
        <img src="dice.png" alt=""/>
      </div>
      <hr />
      <div className='corpo'>
        <img src={`${dado_1}.png`} alt="" />
        <img src={`${dado_2}.png`} alt="" /><br />
        <button onClick={jogar}>Jogar os Dados!</button>
      </div>
      <h2>Regras</h2>
      <p>{`${info_1}`}</p>
      <p>{`${info_2}`}</p>
      <p>Outro valor: Jogo Continua</p>
    </>
  )
}

export default App
