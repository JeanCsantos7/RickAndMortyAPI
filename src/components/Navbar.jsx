
import NavbarStyle from "../styles/Navbar.module.css"
import Logotipo from "../assets/Logotipo.svg"
import { Link } from "react-router-dom"
import logoMenu from "../assets/menu-de-hamburguer.png"
import { useState } from "react";
import MenuMobile from "./MenuMobile";


export default function Navbar({propValor})
{
  
     const [toggleButton, setToggleButton] = useState(true)
     const [renderizarMobile, setRenderizarMobile] = useState('')

    function ValordeEntrada(e)
    {
      const valorDigitado = e.target.value
      propValor(valorDigitado)
      
  

    }

    function recarregar(teste)
    {
      teste.reload()

    }
 
    function teste()
    {
      setToggleButton(!toggleButton)
      setRenderizarMobile(toggleButton ? <MenuMobile/> : '')
    }

 return(
    <>
     <nav className={NavbarStyle.navbarContainer}>
        <Link onClick={recarregar} to={'/'}><img className={NavbarStyle.Logo} src={Logotipo} alt="Logotipo Rick and Morty" /></Link>
        <Link className={NavbarStyle.Link} to={"/Vivos"}>Vivos</Link>
        <Link className={NavbarStyle.Link} to={"/Mortos"}>Mortos</Link>
        <Link className={NavbarStyle.Link} to={"/Desconhecidos"}>Desconhecidos</Link>
       
        <input onChange={ValordeEntrada}  type="text" className={NavbarStyle.inputNome} placeholder="Digite um personagem" /> 
       
        <img onClick={teste} src={logoMenu} alt="" className={NavbarStyle.menuMobile} />
    
     </nav>
     
     <div>
     {renderizarMobile}
      </div>


    </>
 )

}