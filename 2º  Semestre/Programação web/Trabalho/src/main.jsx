import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from './App.jsx'
import Inclusao from './Inclusao.jsx';
import Pesquisa from './Pesquisa.jsx';
import Favoritos from './Favoritos.jsx';
import Carrinho from './Carrinho.jsx';
import Configs from './Configs.jsx';
import Avaliacao from './Avaliacao.jsx';

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "inclusao", Component: Inclusao },
  { path: "pesquisa", Component: Pesquisa },
  { path: "favoritos", Component: Favoritos },
  { path: "carrinho", Component: Carrinho },
  { path: "configs", Component: Configs },
  { path: "avaliacao", Component: Avaliacao },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)