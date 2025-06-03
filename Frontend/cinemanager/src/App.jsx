import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Sessoes from "./Pages/Sessoes"
import "./App.css"
import ProdAlimentos from "./Pages/ProdAlimentos"
import ClientCadastro from "./Pages/ClienteCadastro"
import Cart from "./Pages/Cart"
import SelecaoDeAssentos from "./Pages/SelecaoDeAssentos"
import CompraIngressos from "./Pages/CompraIngressos"
import Ingressos from "./Pages/Ingressos"
import ClientLista from "./Pages/ClienteLista"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/sessoes" element={ <Sessoes/> }></Route>
        <Route path="/alimentos" element={ <ProdAlimentos/> }></Route>
        <Route path="/ingressos" element={ <Ingressos/> }></Route>
        <Route path="/cliente-cadastro" element={ <ClientCadastro/> }></Route>
        <Route path="/cliente-lista" element={ <ClientLista/> }></Route>
        <Route path="/cart" element={ <Cart/>}></Route>
        <Route path="/selecao-assentos" element={ <SelecaoDeAssentos/> }></Route>
        <Route path="/compra-ingressos" element={ <CompraIngressos/> }></Route>
      </Routes>
    </>
  )
}

export default App
