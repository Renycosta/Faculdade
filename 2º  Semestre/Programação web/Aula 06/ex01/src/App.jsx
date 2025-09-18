import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {register, handleSubmit} = useForm()
  const [resposta, setResposta] = useState("")
  const [situacao, setSituacao] = useState("")
  const [div1, setDiv1] = useState ("none")
  const [div2, setDiv2] = useState ("none")
  const [div3, setDiv3] = useState ("none")
  const [div4, setDiv4] = useState ("none")
  const [div5, setDiv5] = useState ("none")
  const [total, setTotal] = useState (null)



  function aleatorio(){
    setDiv1("none")
    setDiv2("none")
    setDiv3("none")
    setDiv4("none")
    setDiv5("none")
    const num = Math.ceil(Math.random()*5)
    setTotal(num)

    if(num == 1){
      setDiv1("block")
    }else if(num == 2){
      setDiv2("block")
    }else if(num == 3){
      setDiv3("block")
    }else if(num == 4){
      setDiv4("block")
    }else if(num == 5){
      setDiv5("block")
    }
  }

  function info(data){
    const nome = data.nome
    const plataforma = data.plataforma
    const vendido = data.vendido
    const ano = data.ano
    const genêro = data.genêro

    let val = 0
    if(total == 1){
      if(nome == "Soma"){
        val = val + 1
      }
      if(plataforma == "Game-boy"){
        val = val + 1
      }
      if(vendido == "Não"){
        val = val + 1
      }
      if(ano == "2003"){
        val = val + 1
      }
      if(genêro == "metroidvania"){
        val = val + 1
      }
    }else if(total ==2){
      if(nome == "John"){
        val = val + 1
      }
      if(plataforma == "Mega-Drive"){
        val = val + 1
      }
      if(vendido == "Não"){
        val = val + 1
      }
      if(ano == "1994"){
        val = val + 1
      }
      if(genêro == "classicvania"){
        val = val + 1
      }
    }else if(total == 3){
      if(nome == "Shanoa"){
        val = val + 1
      }
      if(plataforma == "DS"){
        val = val + 1
      }
      if(vendido == "Não"){
        val = val + 1
      }
      if(ano == "2008"){
        val = val + 1
      }
      if(genêro == "metroidvania"){
        val = val + 1
      }
    }else if(total == 4){
      if(nome == "Richter"){
        val = val + 1
      }
      if(plataforma == "TurboGrafx-16"){
        val = val + 1
      }
      if(vendido == "Não"){
        val = val + 1
      }
      if(ano == "1993"){
        val = val + 1
      }
      if(genêro == "classicvania"){
        val = val + 1
      }
    }else{
      if(nome == "Alucard"){
        val = val + 1
      }
      if(plataforma == "PS1"){
        val = val + 1
      }
      if(vendido == "Sim"){
        val = val + 1
      }
      if(ano == "1997"){
        val = val + 1
      }
      if(genêro == "metroidvania"){
        val = val + 1
      }
    }

    const porcentagem = (val / 5) * 100
    if(val == 5){
      setResposta(`Parabéns você acertou ${porcentagem}% do teste`)
      setSituacao("verde")
    }else if(val == 0){
      setResposta(`Infelimente você acertou ${porcentagem}% do teste`)
      setSituacao("vermelho")
    }else{
      setResposta(`Você fez ${porcentagem}% do teste`)
      setSituacao("amarelo")
    }

  }

  return (
    <>
     <img src="./img/images.png" alt="" className='logo'/>
     <form onSubmit={handleSubmit(info)}>
      <div style={{display: `${div1}`}}>
        <h2>Aria of Sorrow</h2>
        <img src="./img/aria.jpg" alt="" />
            <p>
              <label htmlFor="nome">Qual o nome do protagonista:</label>
              <input type="text" required className='campos' {...register("nome")}/>
            </p>
            <p>
              <label htmlFor="plataforma">Em qual plataforma o jogo foi lançado:</label>
              <select id="plataforma" {...register("plataforma")}>
                <option id="PS1" value="PS1">PS1</option>
                <option id="Game-boy" value="Game-boy">Game-boy</option>
                <option id="DS" value="DS">DS</option>
                <option id="TurboGrafx-16" value="TurboGrafx-16">TurboGrafx-16</option>
                <option id="Mega Drive" value="Mega Drive">Mega Drive</option>
              </select>
            </p>
            <p>
              <label htmlFor="vendido">O jogo está entre os 10 mais vendidos da franquia?</label>
              <input type="radio" id="vendido" required {...register("vendido")} value="Sim"/>sim
              <input type="radio" id="vendido" required {...register("vendido")} value="Não"/>Não
            </p>  
            <p>
              <label htmlFor="ano">Em que ano foi lançado o jogo:</label>
              <input type="text" required className='campos' {...register("ano")}/>
            </p>
            <p>
              <label htmlFor="genêro">Qual o gênero do jogo?</label>
              <input type="radio" id="jogo" required {...register("genêro")} value="metroidvania"/>metroidvania
              <input type="radio" id="jogo" required {...register("genêro")} value="classicvania"/>classicvania
            </p>  
            <p>
              <input type="submit" value="Verificar Resultado" className='btn submit'/>
            </p>
        <h2 className={`${situacao}`}>{resposta}</h2>
      </div>
        <div style={{display: `${div2}`}}>
        <h2>Bloodlines</h2>
        <img src="./img/bloodlines.jpg" alt="" />
            <p>
              <label htmlFor="nome">Qual o nome do protagonista:</label>
              <input type="text" required className='campos' {...register("nome")}/>
            </p>
            <p>
              <label htmlFor="plataforma">Em qual plataforma o jogo foi lançado:</label>
              <select id="plataforma" {...register("plataforma")}>
                <option id="PS1" value="PS1">PS1</option>
                <option id="Game-boy" value="Game-boy">Game-boy</option>
                <option id="DS" value="DS">DS</option>
                <option id="TurboGrafx-16" value="TurboGrafx-16">TurboGrafx-16</option>
                <option id="Mega-Drive" value="Mega-Drive">Mega-Drive</option>
              </select>
            </p>
            <p>
              <label htmlFor="vendido">O jogo está entre os 10 mais vendidos da franquia?</label>
              <input type="radio" id="vendido" required {...register("vendido")} value="Sim"/>sim
              <input type="radio" id="vendido" required {...register("vendido")} value="Não"/>Não
            </p>  
            <p>
              <label htmlFor="ano">Em que ano foi lançado o jogo:</label>
              <input type="text" required className='campos' {...register("ano")}/>
            </p>
            <p>
              <label htmlFor="jogo">Qual o gênero do jogo?</label>
              <input type="radio" id="jogo" required {...register("genêro")} value="metroidvania"/>metroidvania
              <input type="radio" id="jogo" required {...register("genêro")} value="classicvania"/>classicvania
            </p>  
            <p>
              <input type="submit" value="Verificar Resultado" className='btn submit'/>
            </p>
        <h2 className={`${situacao}`}>{resposta}</h2>
      </div>
        <div style={{display: `${div3}`}}>
        <h2>Order of Ecclesia</h2>
        <img src="./img/order.jpg" alt="" />
            <p>
              <label htmlFor="nome">Qual o nome do protagonista:</label>
              <input type="text" required className='campos' {...register("nome")}/>
            </p>
            <p>
              <label htmlFor="plataforma">Em qual plataforma o jogo foi lançado:</label>
              <select id="plataforma" {...register("plataforma")}>
                <option id="PS1" value="PS1">PS1</option>
                <option id="Game-boy" value="Game-boy">Game-boy</option>
                <option id="DS" value="DS">DS</option>
                <option id="TurboGrafx-16" value="TurboGrafx-16">TurboGrafx-16</option>
                <option id="Mega-Drive" value="Mega-Drive">Mega-Drive</option>
              </select>
            </p>
            <p>
              <label htmlFor="vendido">O jogo está entre os 10 mais vendidos da franquia?</label>
              <input type="radio" id="vendido" required {...register("vendido")} value="Sim"/>sim
              <input type="radio" id="vendido" required {...register("vendido")} value="Não"/>Não
            </p>  
            <p>
              <label htmlFor="ano">Em que ano foi lançado o jogo:</label>
              <input type="text" required className='campos' {...register("ano")}/>
            </p>
            <p>
              <label htmlFor="jogo">Qual o gênero do jogo?</label>
              <input type="radio" id="jogo" required {...register("genêro")} value="metroidvania"/>metroidvania
              <input type="radio" id="jogo" required {...register("genêro")} value="classicvania"/>classicvania
            </p>  
            <p>
              <input type="submit" value="Verificar Resultado" className='btn submit'/>
            </p>
        <h2 className={`${situacao}`}>{resposta}</h2>
      </div>
        <div style={{display: `${div4}`}}>
        <h2>Rondo of blood</h2>
        <img src="./img/rondo.png" alt="" />
            <p>
              <label htmlFor="nome">Qual o nome do protagonista:</label>
              <input type="text" required className='campos' {...register("nome")}/>
            </p>
            <p>
              <label htmlFor="plataforma">Em qual plataforma o jogo foi lançado:</label>
              <select id="plataforma" {...register("plataforma")}>
                <option id="PS1" value="PS1">PS1</option>
                <option id="Game-boy" value="Game-boy">Game-boy</option>
                <option id="DS" value="DS">DS</option>
                <option id="TurboGrafx-16" value="TurboGrafx-16">TurboGrafx-16</option>
                <option id="Mega-Drive" value="Mega-Drive">Mega-Drive</option>
              </select>
            </p>
            <p>
              <label htmlFor="vendido">O jogo está entre os 10 mais vendidos da franquia?</label>
              <input type="radio" id="vendido" required {...register("vendido")} value="Sim"/>sim
              <input type="radio" id="vendido" required {...register("vendido")} value="Não"/>Não
            </p>  
            <p>
              <label htmlFor="ano">Em que ano foi lançado o jogo:</label>
              <input type="text" required className='campos' {...register("ano")}/>
            </p>
            <p>
              <label htmlFor="jogo">Qual o gênero do jogo?</label>
              <input type="radio" id="jogo" required {...register("genêro")} value="metroidvania"/>metroidvania
              <input type="radio" id="jogo" required {...register("genêro")} value="classicvania"/>classicvania
            </p>  
            <p>
              <input type="submit" value="Verificar Resultado" className='btn submit'/>
            </p>
        <h2 className={`${situacao}`}>{resposta}</h2>
      </div>
        <div style={{display: `${div5}`}}>
        <h2>symphony of the night</h2>
        <img src="./img/symphony.jpg" alt="" />
            <p>
              <label htmlFor="nome">Qual o nome do protagonista:</label>
              <input type="text" required className='campos' {...register("nome")}/>
            </p>
            <p>
              <label htmlFor="plataforma">Em qual plataforma o jogo foi lançado:</label>
              <select id="plataforma" {...register("plataforma")}>
                <option id="PS1" value="PS1">PS1</option>
                <option id="Game-boy" value="Game-boy">Game-boy</option>
                <option id="DS" value="DS">DS</option>
                <option id="TurboGrafx-16" value="TurboGrafx-16">TurboGrafx-16</option>
                <option id="Mega Drive" value="Mega Drive">Mega Drive</option>
              </select>
            </p>
            <p>
              <label htmlFor="vendido">O jogo está entre os 10 mais vendidos da franquia?</label>
              <input type="radio" id="vendido" required {...register("vendido")} value="Sim"/>sim
              <input type="radio" id="vendido" required {...register("vendido")} value="Não"/>Não
            </p>  
            <p>
              <label htmlFor="ano">Em que ano foi lançado o jogo:</label>
              <input type="text" required className='campos' {...register("ano")}/>
            </p>
            <p>
              <label htmlFor="jogo">Qual o gênero do jogo?</label>
              <input type="radio" id="jogo" required {...register("genêro")} value="metroidvania"/>metroidvania
              <input type="radio" id="jogo" required {...register("genêro")} value="classicvania"/>classicvania
            </p>  
            <p>
              <input type="submit" value="Verificar Resultado" className='btn submit'/>
            </p>
        <h2 className={`${situacao}`}>{resposta}</h2>
      </div>
     </form>

     <button className='btn reset' onClick={aleatorio}>Novo Quiz</button>

    </>
  )
}

export default App
