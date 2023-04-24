import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../componentes/Cards";
const PAGE_SIZE = 15;

const Div = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
height: 100%;
width: 100%;
background-color: #333533;
`;
const DivCards = styled.div`
position: relative;
margin-left: 250px;
display: flex;
flex-wrap: wrap;
background-color: #333533;
flex-direction: row;
height: 100%;
width: 1010px;
`;
const DivPage = styled.div`
padding: 20px;
width: 1010px;
margin-right: 100px;
`;
const BotonPagina = styled.button`
margin-left: 10px;
background-color: ${props => props.active ? '#ffd100' : '#d6d6d6'};
border: none;
height: 20px;
`;
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const games = useSelector(state => state.allGames);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setIsLoading(false);
  }, [games]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const gamesToDisplay = games.slice(startIndex, endIndex);

  return (
    <Div>

      <DivCards>

        <DivPage>
          {[...Array(Math.ceil(games.length / PAGE_SIZE)).keys()].map(page => (
            <BotonPagina key={page} onClick={() => handlePageChange(page + 1)} active={page + 1 === currentPage}>
              {page + 1}
            </BotonPagina>
          ))}
        </DivPage>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          games.length === 0 ? (
            <p>No se encontraron resultados.</p>
          ) : (
            <Cards gamesToDisplay={gamesToDisplay} />
          ))
        };
        <DivPage>
          {[...Array(Math.ceil(games.length / PAGE_SIZE)).keys()].map(page => (
            <button key={page} onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </button>
          ))}
        </DivPage>
      </DivCards>

    </Div>
  );
}

