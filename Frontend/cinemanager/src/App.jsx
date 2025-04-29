import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Sessoes from "./Pages/Sessoes"
import "./App.css"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/sessoes" element={ <Sessoes/> }></Route>
      </Routes>
    </>
  )
}

export default App
