import Homestyle from "../styles/Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";





export default function CardsAPI({ nomePersonagem}) {
  const [pagina, setPagina] = useState(1);

  const [respostaFiltradaAPI, setrespostaFiltradaAPI] = useState([]);
 

  const navigate = useNavigate('')


  function navegar(nomePersonagemClicado)
  {
     


        navigate(`/Personagem/${nomePersonagemClicado}`)
      
     
    
          

    
    }

  

  



  const consumirAPI = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => {

     
        setrespostaFiltradaAPI(
         
          
          response.data.results.filter((item) => {
            return(
                  
              item.name.toLowerCase().includes(nomePersonagem.toLowerCase())
            
            )
          


          })
     
        );
      })
      .catch((error) => {
        console.error("Erro ao consumir a API:", error);
      });
  };

  const proximaPagina = () => {
    setPagina(pagina + 1);
  };

  const voltarPagina = () => {

    setPagina(pagina - 1)
  }

  useEffect(() => {
    consumirAPI();
  }, [pagina, nomePersonagem]);

  return (
    <>

        <div className={Homestyle.Container}>
          

         
          {respostaFiltradaAPI.map((item) => (
            <div  onClick={() => {navegar(item.id)}} key={item.id} className={Homestyle.ContainerCard}>
             
              <img
                className={Homestyle.ImagemCard}
                src={item.image}
                alt={item.name}
              />
              <p className={Homestyle.Nome}>{item.name}</p>
              </div>
          ))}

           {
            respostaFiltradaAPI.length === 0 ? <p className={Homestyle.ErroBusca}>NÃO LOCALIZAMOS RESULTADO DE BUSCA PARA O TERMO '{nomePersonagem}'</p> : 's'
          

           }


        </div>
        
        {
          respostaFiltradaAPI.length === 0 ? '' :  <div className={Homestyle.ButtonContainer}>
          <button onClick={voltarPagina} disabled={pagina === 1}>
            Anterior
          </button>
          <button onClick={proximaPagina}>Próxima</button>
        </div>

        }
       
   

     
      
    
    </>
  );
}
