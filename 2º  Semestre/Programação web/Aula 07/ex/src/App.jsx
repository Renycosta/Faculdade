import './App.css'

function App() {

  return (
    <>
      <header>
        <img src="./rolo_filme.png" alt="" />
        <div>
          <h1>Cine Pipoca: Sua diversão em família</h1>
          <h2>Venda online de ingressos dos filmes em cartaz</h2>
        </div>
      </header>
      <main>
        <h2>Escolha o filme, nº ingressos e pipoca</h1>
        <img src="" alt="" />
        <p>
          <label htmlFor="filme">Título do Filme: </label>
          <select id="">
            <option value="Vingadores">Vingadores Guerra infinita</option>
            <option value="Minecraft">Minecraft</option>
            <option value="Chocolate">A fantastica fabrica de chocolate</option>
            <option value="Titanic">Titanic</option>
            <option value="Batman">The Batman</option>
            <option value="Pikachu">Detetive pikachu</option>
          </select>
        </p>
        <p>
          <label htmlFor="ingressos">Nº de Ingressos: </label>
          <select id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
        <p>
          <input type="checkbox" id="pipoca" />
          <label htmlFor="grande">Grande</label>
          <label htmlFor="familia">Família</label>
        </p>
        <h1>Valor Total R$: </h1>    
      </main>
    </>
  )
}

export default App
