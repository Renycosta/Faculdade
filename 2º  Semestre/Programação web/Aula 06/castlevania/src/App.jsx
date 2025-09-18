import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, reset } = useForm()
  const [resposta, setResposta] = useState("")
  const [situacao, setSituacao] = useState("")
  const [total, setTotal] = useState (null)
  const [titulo, setTitulo] = useState ("")
  const [img, setImg] = useState ("")
  const [div, setDiv] = useState ("nada")
  const [questão1, setQuestão1] = useState("nada")
  const [questão2, setQuestão2] = useState("nada")
  const [questão3, setQuestão3] = useState("nada")
  const [questão4, setQuestão4] = useState("nada")
  const [questão5, setQuestão5] = useState("nada")
  const [questão6, setQuestão6] = useState("nada")
  const [questão7, setQuestão7] = useState("nada")
  const [questão8, setQuestão8] = useState("nada")
  const [questão9, setQuestão9] = useState("nada")
  const [questão10, setQuestão10] = useState("nada")

function aleatorio(){
  const num = Math.ceil(Math.random()*5)
  setTotal(num)
  setDiv("div")
  setResposta("")
  setSituacao("")
  setQuestão1("nada")
  setQuestão2("nada")
  setQuestão3("nada")
  setQuestão4("nada")
  setQuestão5("nada")
  setQuestão6("nada")
  setQuestão7("nada")
  setQuestão8("nada")
  setQuestão9("nada")
  setQuestão10("nada")
  reset()

  if(num == 1){
    setTitulo("Aria of Sorrow")
    setImg("./img/aria.jpg")
  }else if(num == 2){
    setTitulo("Bloodlines")
    setImg("./img/bloodlines.png")
  }else if(num == 3){
    setTitulo("Order of Ecclesia")
    setImg("./img/order.jpg")
  }else if (num == 4){
    setTitulo("Rondo of blood")
    setImg("./img/rondo.png")
  }else{
    setTitulo("Symphony of the night")
    setImg("./img/symphony.jpg")
  }

  do{
    const ques1 = Math.ceil(Math.random()*10)
    const ques2 = Math.ceil(Math.random()*10)
    const ques3 = Math.ceil(Math.random()*10)
    const ques4 = Math.ceil(Math.random()*10)
    const ques5 = Math.ceil(Math.random()*10)
    if (ques1 != ques2 && ques1 != ques3 && ques1 != ques4 && ques1 != ques5 &&
        ques2 != ques3 && ques2 != ques4 && ques2 != ques5 &&
        ques3 != ques4 && ques3 != ques5 &&
        ques4 != ques5){
          if(ques1 == 1 || ques2 == 1 || ques3 == 1 || ques4 == 1 || ques5 == 1){setQuestão1("bloco")}
          if(ques1 == 2 || ques2 == 2 || ques3 == 2 || ques4 == 2 || ques5 == 2){setQuestão2("bloco")}
          if(ques1 == 3 || ques2 == 3 || ques3 == 3 || ques4 == 3 || ques5 == 3){setQuestão3("bloco")}
          if(ques1 == 4 || ques2 == 4 || ques3 == 4 || ques4 == 4 || ques5 == 4){setQuestão4("bloco")}
          if(ques1 == 5 || ques2 == 5 || ques3 == 5 || ques4 == 5 || ques5 == 5){setQuestão5("bloco")}
          if(ques1 == 6 || ques2 == 6 || ques3 == 6 || ques4 == 6 || ques5 == 6){setQuestão6("bloco")}
          if(ques1 == 7 || ques2 == 7 || ques3 == 7 || ques4 == 7 || ques5 == 7){setQuestão7("bloco")}
          if(ques1 == 8 || ques2 == 8 || ques3 == 8 || ques4 == 8 || ques5 == 8){setQuestão8("bloco")}
          if(ques1 == 9 || ques2 == 9 || ques3 == 9 || ques4 == 9 || ques5 == 9){setQuestão9("bloco")}
          if(ques1 == 10 || ques2 == 10 || ques3 == 10 || ques4 == 10 || ques5 == 10){setQuestão10("bloco")}
          break
        }
  }while(true)
}

function info(data){
  const nome = data.nome
  const plataforma = data.plataforma
  const vendido = data.vendido
  const ano = data.ano
  const genêro = data.genêro
  const fase = data.fase
  const boss = data.boss
  const rush = data.rush
  const final = data.final
  const steam = data.steam

  let val = 0
  if(total == 1){
    if(nome == "Soma"){val++}
    if(plataforma == "Game-boy"){val++}
    if(vendido == "Não"){val++}
    if(ano == "2003"){val++}
    if(genêro == "metroidvania"){val++}
    if(fase == "Castle-Corridor"){val++}
    if(boss == "Creaking Skull"){val++}
    if(rush == "Sim"){val++}
    if(final == "Três"){val++}
    if(steam == "Sim"){val++}
  }else if(total ==2){
    if(nome == "John"){val++}
    if(plataforma == "Mega-Drive"){val++}
    if(vendido == "Não"){val++}
    if(ano == "1994"){val++}
    if(genêro == "classicvania"){val++}
    if(fase == "Munitions-Factory-of-Ruins"){val++}
    if(boss == "Armored Knight"){val++}
    if(rush == "Não"){val++}
    if(final == "Dois"){val++}
    if(steam == "Sim"){val++}
  }else if(total == 3){
    if(nome == "Shanoa"){val++}
    if(plataforma == "DS"){val++}
    if(vendido == "Não"){val++}
    if(ano == "2008"){val++}
    if(genêro == "metroidvania"){val++}
    if(fase == "Ecclesia"){val++}
    if(boss == "Giant Skeleton"){val++}
    if(rush == "Sim"){val++}
    if(final == "Dois"){val++}
    if(steam == "Sim"){val++}
  }else if(total == 4){
    if(nome == "Richter"){val++}
    if(plataforma == "TurboGrafx-16"){val++}
    if(vendido == "Não"){val++}
    if(ano == "1993"){val++}
    if(genêro == "classicvania"){val++}
    if(fase == "Village-of-Aljiba"){val++}
    if(boss == "Wyvern"){val++}
    if(rush == "Não"){val++}
    if(final == "Cinco"){val++}
    if(steam == "Não"){val++}
  }else if(total == 5){
    if(nome == "Alucard"){val++}
    if(plataforma == "PS1"){val++}
    if(vendido == "Sim"){val++}
    if(ano == "1997"){val++}
    if(genêro == "metroidvania"){val++}
    if(fase == "Bloodlines"){val++}
    if(boss == "Drácula"){val++}
    if(rush == "Não"){val++}
    if(final == "Dois"){val++}
    if(steam == "Não"){val++}
  }

  const porcentagem = (val / 5) * 100
  if(val == 5){
    setResposta(`Parabéns você acertou ${porcentagem}% do teste`)
    setSituacao("verde")
  }else if(val == 0){
    setResposta(`Infelizmente você acertou ${porcentagem}% do teste`)
    setSituacao("vermelho")
  }else{
    setResposta(`Você fez ${porcentagem}% do teste`)
    setSituacao("amarelo")
  }

}

return (
  <>
    <img src="./img/logo.png" alt="" className='logo'/>
      <form onSubmit={handleSubmit(info)}>
        <div className={`quiz-container ${div}`}>
          <h2 className='titulo'>{titulo}</h2>
          <div className='design'>
            <img src={img} />
              <div className='questões'>
                <p className={`${questão1}`}>
                  <label htmlFor="nome">Qual o nome do protagonista:</label>
                  <input type="text" className='campos' {...register("nome")}/>
                </p>
                <p className={`${questão2}`}>
                  <label htmlFor="plataforma">Em qual plataforma o jogo foi lançado:</label>
                  <select id="plataforma" {...register("plataforma")}>
                    <option id="-" value="-">-</option>
                    <option id="PS1" value="PS1">PS1</option>
                    <option id="Game-boy" value="Game-boy">Game-boy</option>
                    <option id="DS" value="DS">DS</option>
                    <option id="TurboGrafx-16" value="TurboGrafx-16">TurboGrafx-16</option>
                    <option id="Mega Drive" value="Mega Drive">Mega Drive</option>
                  </select>
                </p>
                <p className={`${questão3}`}>
                  <label htmlFor="vendido">O jogo está entre os 10 mais vendidos da franquia?</label>
                  <div className='radio'>
                    <label>
                      <input type="radio" id="vendido" {...register("vendido")} value="Sim"/>Sim
                    </label>
                    <label>
                      <input type="radio" id="vendido" {...register("vendido")} value="Não"/>Não
                    </label>
                  </div>
                </p>
                <p className={`${questão4}`}>
                  <label htmlFor="ano">Em que ano foi lançado o jogo:</label>
                  <input type="text" className='campos' {...register("ano")}/>
                </p>
                <p className={`${questão5}`}>
                  <label htmlFor="genêro">Qual o gênero do jogo?</label>
                  <div className='radio'>
                    <label>
                      <input type="radio" id="jogo" {...register("genêro")} value="metroidvania"/>metroidvania
                    </label>
                    <label>
                      <input type="radio" id="jogo"{...register("genêro")} value="classicvania"/>classicvania
                    </label>
                  </div>
                </p>
                <p className={`${questão6}`}>
                  <label htmlFor="fase">Qual o nome da primeira área/fase do jogo?</label>
                  <select id="fase" {...register("fase")}>
                    <option id="-" value="-">-</option>
                    <option id="Castle-Corridor" value="Castle-Corridor">Castle-Corridor</option>
                    <option id="Munitions-Factory-of-Ruins" value="Munitions-Factory-of-Ruins">Munitions-Factory-of-Ruins</option>
                    <option id="Ecclesia" value="Ecclesia">Ecclesia</option>
                    <option id="Village-of-Aljiba" value="Village-of-Aljiba">Village-of-Aljiba</option>
                    <option id="Bloodlines" value="Bloodlines">Bloodlines</option>
                  </select>
                </p>
                <p className={`${questão7}`}>
                  <label htmlFor="boss">Qual o nome do primeiro boss do jogo?</label>
                  <input type="text" className='campos' {...register("boss")}/>
                </p>
                <p className={`${questão8}`}>
                  <label htmlFor="rush">Esse jogo tem boss rush?</label>
                  <div className='radio'>
                    <label>
                      <input type="radio" id="rush" {...register("rush")} value="Sim"/>Sim
                    </label>
                    <label>
                      <input type="radio" id="rush" {...register("rush")} value="Não"/>Não
                    </label>
                  </div>
                </p>
                <p className={`${questão9}`}>
                  <label htmlFor="final">Quantos finais o jogo tem?</label>
                  <select id="final" {...register("final")}>
                    <option id="-" value="-">-</option>
                    <option id="Um" value="Um">Um</option>
                    <option id="Dois" value="Dois">Dois</option>
                    <option id="Três" value="Três">Três</option>
                    <option id="Quatro" value="Quatro">Quatro</option>
                    <option id="Cinco" value="Cinco">Cinco</option>
                  </select>
                </p>
                <p className={`${questão10}`}>
                  <label htmlFor="steam">Esse jogo está disponível na steam?</label>
                  <div className='radio'>
                    <label>
                      <input type="radio" id="steam" {...register("steam")} value="Sim"/>sim
                    </label>
                    <label>
                      <input type="radio" id="steam" {...register("steam")} value="Não"/>Não
                    </label>
                  </div>
                </p>
                <p>
                  <input type="submit" value="Verificar Resultado" className='btn submit'/>
                </p>
                <h2 className={`${situacao}`}>{resposta}</h2>
              </div>
          </div>
        </div>
      </form>
      <button className='btn novo' onClick={aleatorio}>Novo Quiz</button>
  </>
)
}

export default App
