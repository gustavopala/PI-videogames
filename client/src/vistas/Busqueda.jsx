import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../componentes/Cards";

const Div = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #d6d6d6;
flex-direction: row;
height: 100%;
width: 100%;
`;
export default function Busqueda() {
  const [isLoading, setIsLoading] = useState(true);
  const gamesToDisplay = useSelector(state => state.myGames);

  useEffect(() => {
    setIsLoading(false);
  
  }, [gamesToDisplay]);


  return (
    <Div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        gamesToDisplay.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          <Cards gamesToDisplay={gamesToDisplay} />

        )
      )}
    </Div>
  );
}