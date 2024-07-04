import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vivos from "./pages/Vivos";
import Desconhecidos from "./pages/Desconhecidos";
import Mortos from "./pages/Mortos";
import DetalhesPersonagem from "./components/DetalhePersonagem";


export default function Rotas() {

  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Vivos" element={<Vivos/>}></Route>
        <Route path="/Mortos" element={<Mortos/>}></Route>
        <Route path="/Desconhecidos" element={<Desconhecidos/>}></Route>
        <Route path="/Personagem/:id" element={<DetalhesPersonagem/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
