import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Sessoes from "./Pages/Sessoes"
import "./App.css"
import ProdutosAlim from "./Pages/Alimentos"
import ClientCadastro from "./Pages/ClienteCadastro"
import Cart from "./Pages/Cart"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/sessoes" element={ <Sessoes/> }></Route>
        <Route path="/alimentos" element={ <ProdutosAlim/> }></Route>
        <Route path="/cliente-cadastro" element={ <ClientCadastro/> }></Route>
        <Route path="/cart" element={ <Cart/>}></Route>
      </Routes>
    </>
  )
}

export default App
