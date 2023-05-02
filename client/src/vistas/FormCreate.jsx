import { useState, useEffect } from "react";
import validate from "../componentes/validate";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getGames } from "../redux/actions";
import InputsForm from '../componentes/InputsForm';
import styled from "styled-components";
import emptyImage from "../imagenes/guardadoForm.png";
import emptyImage2 from "../imagenes/errorForm.png";
const URL_BASE = "http://localhost:3001/";

const DivCreado = styled.div`
position: relative;
width: 400px;
height: 100px;
margin-left: 400px;
margin-top: 20px;
border: 3px solid #27B516;
border-radius: 20px;
`;
const DivError = styled.div`
position: relative;
width: 400px;
height: 100px;
margin-left: 400px;
margin-top: 20px;
border: 3px solid #DF0F0F;
border-radius: 20px;
`;

const Span = styled.span`
position: absolute;
left: 160px;
width: 150px;
bottom: 25px;
font-weight: 400;
font-size: 16px;
font-family: Arial, sans-serif;
line-height: 23px;
font-weight: bold;
text-align: left;
color: white;
`;
const Img = styled.img`
position: absolute;
left: 80px;
bottom: 20px;
`;
const Span2 = styled.span`
position: absolute;
left: 160px;
width: 150px;
bottom: 25px;
font-weight: 400;
font-size: 16px;
font-family: Arial, sans-serif;
line-height: 23px;
font-weight: bold;
text-align: left;
color: white;
`;
const Button = styled.button`
width: 300px;
height: 50px;
margin-top: 20px;
margin-bottom: 20px;
font-size: 16px;
font-family: Arial, sans-serif;
line-height: 23px;
font-weight: bold;
background-color: ${props => props.complete ? '#ffd100' : '#202020'};
color: white;
transition: background-color 0.3s ease-in-out;
`;
function FormCreate() {
  const dispatch = useDispatch();
  const [game, setGame] = useState({
    name: '',
    description: '',
    released: '',
    background_image: '',
    background_image_additional: '',
    rating: '',
    parent_platforms: [],
    genre: []
  });

  const [errors, setErrors] = useState({});
  const [formComplete, setFormComplete] = useState(false);
  const [gameCreated, setGameCreated] = useState(false);
  const [gameError, setGameError] = useState(true);
  const [nameError, setnameError] = useState(true);
  const [completeNameRat, setCompleteNameRat] = useState(false);
  const [completeImage, setCompleteImage] = useState(false);
  const [completeGenreYPlat, setCompleteGenreYPlat] = useState(false);

  useEffect(() => {
    if (game.name &&
      game.description &&
      game.released &&
      game.rating &&
      nameError &&
      !errors.name &&
      !errors.rating &&
      !errors.released &&
      !errors.description
      ) {
      setCompleteNameRat(true)
    } else {
      setCompleteNameRat(false)
    }
    if (
      game.background_image &&
      game.background_image_additional
    ) {
      setCompleteImage(true)
    } else {
      setCompleteImage(false)
    }
    if (game.parent_platforms.length > 0 &&
      game.genre.length > 0) {
      setCompleteGenreYPlat(true)
    } else {
      setCompleteGenreYPlat(false)
    }
    if (
      game.name &&
      game.description &&
      game.released &&
      game.rating &&
      game.background_image &&
      game.background_image_additional &&
      game.parent_platforms.length > 0 &&
      game.genre.length > 0
    ) {
      setFormComplete(true);
    }
    else {
      setFormComplete(false);

    }
  }, [game, nameError]);

  const handlechage = (event) => {
    setGame({
      ...game,
      [event.target.name]: event.target.value
    })
    setErrors((prevErrors) => ({
      ...prevErrors,
      [event.target.name]: validate(
        {
          ...game,
          [event.target.name]: event.target.value,
        },
        prevErrors
      )[event.target.name],
    }));
  }
  const handleGenreClick = (event) => {
    const genreId = event.target.id;
    const genreIndex = game.genre.indexOf(genreId);

    if (genreIndex === -1) {
      // Si el género no está en el array, lo agrega
      setGame({
        ...game,
        genre: [...game.genre, genreId],
      });
    } else {
      // Si el género ya está en el array, lo elimina
      const updatedGenre = [...game.genre];
      updatedGenre.splice(genreIndex, 1);
      setGame({
        ...game,
        genre: updatedGenre,
      });
    }
  };
  const handlePlatformClick = (event) => {
    const plat = event.target.value;
    const platIndex = game.parent_platforms.indexOf(plat);

    if (platIndex === -1) {
      // Si el género no está en el array, lo agrega
      setGame({
        ...game,
        parent_platforms: [...game.parent_platforms, plat],
      });
    } else {
      // Si el género ya está en el array, lo elimina
      const updatedPlat = [...game.parent_platforms];
      updatedPlat.splice(platIndex, 1);
      setGame({
        ...game,
        parent_platforms: updatedPlat,
      });
    }
  };
  const cleanStateGame = () => {
    setGame({
      name: '',
      description: '',
      released: '',
      background_image: '',
      background_image_additional: '',
      rating: '',
      parent_platforms: [],
      genre: []
    });
  }
  const createGame = async (game) => {
    try {
      const { name, description, released, background_image, background_image_additional, rating, parent_platforms, genre } = game;
      const response = await axios.post(`${URL_BASE}videogames`, {
        name,
        description,
        released,
        background_image,
        background_image_additional,
        rating,
        parent_platforms,
        genre
      });
      dispatch(getGames());
      setGameCreated(true);
      setGameError(true);
      setnameError(true);
      cleanStateGame();
    } catch (error) {
      setGameError(false);
      (error.response.data.error == 'El juego ya existe!') && setnameError(false);
      (error.response.data.error != 'El juego ya existe!') && setnameError(true);
      setGameCreated(false);
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (formComplete) {
      createGame(game);
    }

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputsForm
          handlechage={handlechage}
          handleGenreClick={handleGenreClick}
          handlePlatformClick={handlePlatformClick}
          game={game} errors={errors} completeNameRat={completeNameRat}
          completeImage={completeImage} completeGenreYPlat={completeGenreYPlat}
        />
        {gameCreated &&
          <DivCreado>
            <Img src={emptyImage} alt="No characters available" />
            <Span>Juego creado correctamente</Span>
          </DivCreado>}
        {!gameError &&
          <DivError>
            <Img src={emptyImage2} alt="No characters available" />
            <Span2>{nameError ? 'Error! revise el formulario' : 'Error! el juego ya existe'}</Span2>
          </DivError>}
        <Button type="submit" disabled={!formComplete} complete={formComplete}>
          Crear juego
        </Button>
      </form>
    </div>
  )
}

export default FormCreate;