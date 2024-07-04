
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DesconhecidosStyle from "../styles/Desconhecidos.module.css"
import { useEffect, useState } from "react";





export default function Desconhecidos() {

  const [dadoPersonagem, setDadoPersonagem] = useState([]);
  const [pagina, setPagina] = useState(1);
  const navigate = useNavigate('')
  

  function ApiVivos() {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${pagina}&status=unknown`
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
     
     
     <div className={DesconhecidosStyle.Container}>
     <h1 className={DesconhecidosStyle.Titulo}>Desconhecidos</h1>

        <Link className={DesconhecidosStyle.Links} to={"/"}>
          <span>
         
            <p className={DesconhecidosStyle.textoVoltar}>Voltar</p>
          </span>
        </Link>
      </div>
     

      {dadoPersonagem.map((dado) => {
        return (
          <div onClick={() => {Navegar(dado.id)}}className={DesconhecidosStyle.ContainerCard1}>
            <div className={DesconhecidosStyle.ContainerCard2}>
              <img className={DesconhecidosStyle.ImagemCard} src={dado.image} alt="" />
              <p className={DesconhecidosStyle.Nome}>{dado.name}</p>
            </div>
          </div>
        );
      })}
      
      <div className={DesconhecidosStyle.btn} >
      <button  onClick={voltarPagina} disabled={pagina === 1}>
        Anterior
      </button>
      <button onClick={proximaPagina}>Próxima</button>
      </div>
     
    </>
  );
}

      
