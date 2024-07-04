
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MortosStyle from "../styles/Mortos.module.css"
import { useEffect, useState } from "react";





export default function Mortos() {

  const [dadoPersonagem, setDadoPersonagem] = useState([]);
  const [pagina, setPagina] = useState(1);
  const navigate = useNavigate('')
  

  function ApiVivos() {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${pagina}&status=dead`
      )
      .then((response) => {
        setDadoPersonagem(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function proximaPagina() {
    setPagina(pagina + 1);
  }

  function voltarPagina() {
    setPagina(pagina - 1);
  }


  function Navegar(nomePersonagem)
  {
   navigate(`/Personagem/${nomePersonagem}`)

  }


  useEffect(() => {
    ApiVivos();
  }, [pagina]);

  return (
    <>
     
     
     <div className={MortosStyle.Container}>
     <h1 className={MortosStyle.Titulo}>Mortos</h1>

        <Link className={MortosStyle.Links} to={"/"}>
          <span>
   
            <p className={MortosStyle.textoVoltar}>Voltar</p>
          </span>
        </Link>
      </div>
     

      {dadoPersonagem.map((dado) => {
        return (
          <div onClick={() => {Navegar(dado.id)}}className={MortosStyle.ContainerCard1}>
            <div className={MortosStyle.ContainerCard2}>
              <img className={MortosStyle.ImagemCard} src={dado.image} alt="" />
              <p className={MortosStyle.Nome}>{dado.name}</p>
            </div>
          </div>
        );
      })}
      
      <div className={MortosStyle.btn} >
      <button  onClick={voltarPagina} disabled={pagina === 1}>
        Anterior
      </button>
      <button onClick={proximaPagina}>Próxima</button>
      </div>
     
    </>
  );
}

      
