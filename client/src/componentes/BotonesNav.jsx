import styled from "styled-components";

const Div = styled.div`
margin-top: 0px;
display: flex;
flex-wrap: wrap;
flex-direction: row;

background-color: #333533;
`;
const Boton = styled.button`
background-color: #333533;
width: 190px;
border: none;
margin-bottom: 40px;
margin-left: 30px;
`;
const Select = styled.select`
background-color: #333533;
width: 190px;
border: none;
color: white;

font-size: 15px;
line-height: 48px;
font-weight: 400;
font-family: Arial, sans-serif;
font-weight: bold;
`;
const H1 = styled.h1`
margin-left: 30px;
color: white;
font-weight: bold;
font-size: 25px;
line-height: 40px;
font-weight: 600;
font-family: Inter,sans-serif;
`;

function BotonesNav({ handleChange, handleChan, handleChangeOrdenAlfa,handleChangeOrdenRat}) {
  return (
    <>
    <Div>
      <H1>FILTROS</H1>
      <Boton> <Select name="filtroGenero" id="" onChange={handleChange}>
                    <option value="">Seleccionar género</option>
                    <option value="Action">Action</option>
                    <option value="Indie">Indie</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board">Board</option>
                    <option value="Games">Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </Select></Boton>
                <Boton> <Select name="filtroOrigen" id="" onChange={handleChan}>
                    <option value="">Seleccionar origen</option>
                    <option value="Api">Api</option>
                    <option value="Bd">Base de datos</option>
                    </Select></Boton>
                <Boton> <Select name="ordenAlfabetico" id="" onChange={handleChangeOrdenAlfa}>
                    <option value="">Ordenar por nombre</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Desendente</option>
                </Select></Boton>
                <Boton> <Select name="ordenRating" id="" onChange={handleChangeOrdenRat}>
                    <option value="">Ordenar por raiting</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Desendente</option>
                    </Select></Boton>
                    </Div>
    </>
  );
}

export default BotonesNav;