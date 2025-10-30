import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, watch } = useForm({
    defaultValues: {
      modelo: "img/polo.png",
      camera: false,
      tela: false
    }
  })

  const campos = watch(['modelo', 'camera'])

  const modelo = watch("modelo")
  const camera = watch("camera")
  const tela = watch("tela")

  function calculaPreco(){
    let preco
    if(modelo == "img/polo.png"){
      preco = 89000
    } else if(modelo == "img/t-cross.png"){
      preco = 105000
    } else{
      preco = 102000
    }

    if(camera){
      preco = preco + 1200
    }

    if(tela){
      preco = preco + 900
    }
    
    return preco
  }

  return (
    <>
      <header>
        <img src="img/logo.png" alt="" />
        <div>
          <h1>Revenda Avenida - 25 anos</h1>
          <h2><i>Promoções de Aniversário: Veículos com Desconto</i></h2>
        </div>
      </header>
      <main>
        <div>
          <h3>Modelos em Promoção</h3>
          <p>
            <input type="radio" id="polo" {...register("modelo")} value="img/polo.png"/>
            <label htmlFor="polo">VW Polo</label>
          </p>
          <p>
            <input type="radio" id="t-cross" {...register("modelo")} value="img/t-cross.png"/>
            <label htmlFor="t-cross">VW T-Cross</label>
          </p>
          <p>
            <input type="radio" id="virtus" {...register("modelo")} value="img/virtus.png"/>
            <label htmlFor="virtus">VW Virtus</label>
          </p>
        </div>
        <div>
          <img src={modelo} alt="" />
        </div>
        <div>
          <h3>Acessórios Opicionais</h3>
          <p>
            <input type="checkbox" id="camera" {...register("camera")}/>
            <label htmlFor="camera">Câmera de Ré</label>
          </p>
          <p>
            <input type="checkbox" id="tela" {...register("tela")}/>
            <label htmlFor="tela">Tela Multimídia</label>
          </p>
        </div>
      </main>
      <footer>
        <h2>Preço Promocional: R$ {calculaPreco().toLocaleString("pt-br", {minimumFractionDigits: 2})}</h2>
        <h2><i>* Consulte opções de financiamento</i></h2>
      </footer>
    </>
  )
}

export default App
