import { Link, useNavigate } from "react-router-dom";
import VivosStyle from "../styles/Vivos.module.css";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Vivos() {

  const [dadoPersonagem, setDadoPersonagem] = useState([]);
  const [pagina, setPagina] = useState(1);
  const navigate = useNavigate('')
  

  function ApiVivos() {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${pagina}&status=alive`
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
     
     
     <div className={VivosStyle.Container}>
     <h1 className={VivosStyle.Titulo}>Vivos</h1>

        <Link className={VivosStyle.Links} to={"/"}>
          <span>
        
            <p className={VivosStyle.textoVoltar}>Voltar</p>
          </span>
        </Link>
      </div>
     

      {dadoPersonagem.map((dado) => {
        return (
          <div onClick={() => {Navegar(dado.id)}}className={VivosStyle.ContainerCard1}>
            <div className={VivosStyle.ContainerCard2}>
              <img className={VivosStyle.ImagemCard} src={dado.image} alt="" />
              <p className={VivosStyle.Nome}>{dado.name}</p>
            </div>
          </div>
        );
      })}
      
      <div className={VivosStyle.btn} >
      <button  onClick={voltarPagina} disabled={pagina === 1}>
        Anterior
      </button>
      <button onClick={proximaPagina}>Próxima</button>
      </div>
     
    </>
  );
}
