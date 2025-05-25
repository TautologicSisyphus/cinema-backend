import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Sessoes from "./Pages/Sessoes"
import "./App.css"
import ProdutosAlim from "./Pages/Alimentos"
import ClientCadastro from "./Pages/ClienteCadastro"
import SelecaoDeAssentos from "./Pages/SelecaoDeAssentos"
import CompraIngressos from "./Pages/CompraIngressos"
import Ingressos from "./Pages/Ingressos"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/sessoes" element={ <Sessoes/> }></Route>
        <Route path="/alimentos" element={ <ProdutosAlim/> }></Route>
        <Route path="/ingressos" element={ <Ingressos/> }></Route>
        <Route path="/cliente-cadastro" element={ <ClientCadastro/> }></Route>
        <Route path="/selecao-assentos" element={ <SelecaoDeAssentos/> }></Route>
        <Route path="/compra-ingressos" element={ <CompraIngressos/> }></Route>
      </Routes>
    </>
  )
}

export default App
