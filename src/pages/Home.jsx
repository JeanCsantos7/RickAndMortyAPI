
import Navbar from "../components/Navbar";
import CardsAPI from "../components/CardsAPI";
import { useState } from "react";



export default function Home() {
  

   const[termodePesquisa, setTermoPesquisa]   = useState('')
  

   function valorDigitado(valorInformado)
   {
    setTermoPesquisa(valorInformado)
   }





   
   
  


  return (
    <>
     

      <Navbar  propValor={valorDigitado}  />
      <CardsAPI  nomePersonagem={termodePesquisa}/>
    
 
     
      
    </>
  );
}
