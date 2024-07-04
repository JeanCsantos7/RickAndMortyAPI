
import { Link } from "react-router-dom"
import MenuMobileStyle from "../styles/MenuMobile.module.css"


export default function MenuMobile()
{
  return(
    <>

   <div className={MenuMobileStyle.Container}>
    <Link className={MenuMobileStyle.Links} to={"/Vivos"}>Vivos</Link>
    <Link className={MenuMobileStyle.Links}  to={"/Mortos"}>Mortos</Link>
    <Link className={MenuMobileStyle.Links} to={"/Desconhecidos"}>Desconhecidos</Link>

   </div>
  
    </>

  )

}