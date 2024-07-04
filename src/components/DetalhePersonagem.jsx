import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import DetalhesStyle from "../styles/DetalhesPersonagens.module.css";

import CirculoVerde from "../assets/circuloVerde.png";
import CirculoVermelho from "../assets/circuloVermelho.png";
import CirculoBranco from "../assets/circuloBranco.png";

import { Link } from "react-router-dom";

export default function DetalhesPersonagem() {
  const { id } = useParams();
  const [dadoAPI, setDadoAPI] = useState([]);
  const [circulo, setCirculo] = useState("");

  function ApiDetalhes() {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setDadoAPI(response.data);

        if (response.data.status === "Alive") {
          setCirculo(CirculoVerde);
        } else if (response.data.status === "Dead") {
          setCirculo(CirculoVermelho);
        } else {
          setCirculo(CirculoBranco);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    ApiDetalhes();
  }, [id]);

  return (
    <>
      <div className={DetalhesStyle.Container}>
        <h1 className={DetalhesStyle.TituloDetalhes}>Detalhes</h1>

        <Link className={DetalhesStyle.Links} to={"/"}>
          <span>
            <p className={DetalhesStyle.textoVoltar}>Voltar</p>
          </span>
        </Link>
      </div>

      <div className={DetalhesStyle.ContainerCard1}>
        <div className={DetalhesStyle.ContainerCard2}>
          <img
            className={DetalhesStyle.ImagemCard}
            src={dadoAPI.image}
            alt=""
          />
          <p className={DetalhesStyle.Nome}>{dadoAPI.name}</p>

          <div className={DetalhesStyle.Status_SpecieContainer}>
            <img className={DetalhesStyle.circulo} src={circulo} alt="" />
            <p className={DetalhesStyle.Status_Specie}>
              {dadoAPI.status} - {dadoAPI.species}
            </p>
          </div>

          <p className={DetalhesStyle.genero}>{dadoAPI.gender}</p>
        </div>
      </div>
    </>
  );
}
