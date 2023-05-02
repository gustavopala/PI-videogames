import styled from "styled-components";
import { useState, useEffect } from "react";
import emptyImage2 from "../imagenes/errorForm.png";
import emptyImage3 from "../imagenes/complete.png";
import ampliar from "../imagenes/flechaAmpliar.png";
import contraer from "../imagenes/flechaContraer.png";
const Img = styled.img`
  height: 200px;
  width: 300px;

`;
const DivSinImagen = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  background-color: #d6d6d6;
`;

const Div = styled.div`
position: relative;
width: 800px;
margin-left: 200px;
margin-top: 0px;
`;
const Div1 = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
padding: 5px;
background-color: #202020;
margin-top: 10px;
`;
const TittleButton = styled.button`
display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 800px;
background-color: white;
`;

const DivOpciones = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
padding-bottom: 30px;
`;

const H3 = styled.p`
text-align: left;
font-weight: bold;
font-size: 18px;
line-height: 0px;
font-weight: 600;
font-family: Inter,sans-serif;
margin-left: 10px;
`;
const DivLabel = styled.div`
margin-left: 50px;
width: 300px;

`;

const Input = styled.input`
width: 300px;
height: 20px;
`;

const DivImg = styled.div`
width: 300px;
margin-left: 50px;
margin-top: 10px;
`;

const DivPlat = styled.div`
height: 150px;
width: 600px;
margin-left: 75px;
`;
const DivGen = styled.div`
height: 200px;
width: 600px;
margin-left: 75px;
`;
const Span = styled.span`
width: 700px;
font-size: 16px;
font-family: Arial, sans-serif;
line-height: 23px;
font-weight: bold;
color: white;
`;
const DivButton = styled.div`
width: 600px;
margin-top: 10px;

`;
const Subtittle = styled.p`
width: 100px;
margin-bottom: 10px;
margin-left: 5px;
font-weight: 400;
font-size: 18px;
font-family: Arial, sans-serif;
line-height: 23px;
font-weight: bold;
text-align: left;
color: #d6d6d6;
`;
const SubtittleImg = styled.p`
width: 220px;
margin-bottom: 10px;
margin-left: 0px;
font-weight: 400;
font-size: 18px;
font-family: Arial, sans-serif;
line-height: 23px;
font-weight: bold;
text-align: left;
color: #d6d6d6;
`;
const ImgComplete = styled.img`
margin-top: 3px;
width: 30px;
height: 30px;
margin-left: 10px;
`;
const ErrorSpan = styled.span`
font-weight: 400;
font-size: 14px;
font-family: Arial, sans-serif;
line-height: 0px;
text-align: left;
color: white;
`;
function InputsForm({ handlechage, handleGenreClick, handlePlatformClick, game,
   errors, completeNameRat, completeImage, completeGenreYPlat}) {
  const [formName, setFormName] = useState(true);
  const [formImages, setformImages] = useState(false);
  const [formGenreYplat, setformGenreYplat] = useState(false);
  const gerneName = {
    4: 'Action',
    51: 'Indie',
    3: 'Adventure',
    5: 'RPG',
    10: 'Strategy',
    2: 'Shooter',
    14: 'Simulation',
    7: 'Puzzle',
    11: 'Arcade',
    83: 'Platformer',
    1: 'Racing',
    59: 'Massively Multiplayer',
    15: 'Sports',
    6: 'Fighting',
    19: 'Family',
    28: 'Board',
  }

  const handleNameRat = () => {
    setFormName(!formName);
  }

  const handleImage = () => {
    setformImages(!formImages);
  }

  const handleGenreYplat = () => {
    setformGenreYplat(!formGenreYplat);
  }

  useEffect(() => {
  }, [completeNameRat,completeImage]);

  return (
    <Div>
      <Div1>
      <TittleButton type="button" onClick={handleNameRat} >
        <ImgComplete src={completeNameRat ?
          emptyImage3 : emptyImage2} alt="No characters available" />
        <H3>Name, rating, description y released</H3>
        <ImgComplete key={formName} src={formName? contraer:ampliar}
         alt="No characters available" />
        </TittleButton>
        {formName && <DivOpciones>
          <DivLabel>
            <label htmlFor="name" ><Subtittle>Name</Subtittle></label>
            <Input type="text" name='name' value={game.name}
             onChange={handlechage} placeholder="Ingrese un nombre para el juego" />
            <ErrorSpan>{errors.name}</ErrorSpan>
          </DivLabel>
          <DivLabel><label htmlFor="rating"><Subtittle>Rating</Subtittle></label>
            <Input type="text" name='rating' value={game.rating} 
            onChange={handlechage} placeholder="Ingrese un puntaje del 0 al 5" />
            <ErrorSpan>{errors.rating}</ErrorSpan>
          </DivLabel>
          <DivLabel><label htmlFor="released"><Subtittle>Released</Subtittle></label>
            <Input type="text" name='released' value={game.released} 
            onChange={handlechage} placeholder="Ingrese la fecha de lanzamiento" />
            <ErrorSpan>{errors.released}</ErrorSpan>
          </DivLabel>
          <DivLabel><label htmlFor="description"><Subtittle>Description</Subtittle></label>
            <Input type="description" name='description' value={game.description} 
            onChange={handlechage} placeholder="Ingrese un texto descriptivo del juego" />
            <ErrorSpan>{errors.description}</ErrorSpan>
          </DivLabel>
        </DivOpciones>}
      </Div1>

      <Div1>
        <TittleButton type="button" onClick={handleImage} >
        <ImgComplete src={completeImage ?
          emptyImage3 : emptyImage2} alt="No characters available" />
        <H3>imagenes</H3>
        <ImgComplete key={formImages} src={formImages? contraer:ampliar}
         alt="No characters available" />
         </TittleButton>
        {formImages&&<DivOpciones>
        <DivImg>
          {game.background_image ?
            <Img src={`${game.background_image}`} alt="" /> :
            <DivSinImagen><span>imagen no disponible</span></DivSinImagen>}
          <label htmlFor="background_image"><SubtittleImg>Url de imagen</SubtittleImg></label>
          <Input type="text" name='background_image' value={game.background_image} 
          onChange={handlechage} />
          <ErrorSpan>{errors.background_image}</ErrorSpan>
        </DivImg>
        <DivImg>
          {game.background_image_additional ?
            <Img src={`${game.background_image_additional}`} alt="" /> :
            <DivSinImagen><span>imagen no disponible</span></DivSinImagen>}
          <label htmlFor="background_image_additional">
            <SubtittleImg>Url de imagen adicional</SubtittleImg></label>
          <Input type="text" name='background_image_additional' 
          value={game.background_image_additional} onChange={handlechage} />
          <ErrorSpan>{errors.background_image_additional}</ErrorSpan>
        </DivImg>
        </DivOpciones>}
      </Div1>

      <Div1>
      <TittleButton type="button" onClick={handleGenreYplat} >
      <ImgComplete src={completeGenreYPlat ?
          emptyImage3 : emptyImage2} alt="No characters available" />
        <H3>genres y platforms</H3>
        <ImgComplete key={formGenreYplat} src={formGenreYplat? contraer:ampliar}
         alt="No characters available" />
         </TittleButton>
        {formGenreYplat&&<DivOpciones>
      <DivPlat>
        <Subtittle>Plataforms</Subtittle>
        <hr />
        <Span>{game.parent_platforms.length != 0 ?
          game.parent_platforms.map(plat => ` ${plat} |`) :
          'Seleccione al menos una plataforma de las que estan aqui abajo!'}
        </Span>
        <DivButton>
          <button type="button" value="PC" onClick={handlePlatformClick}>PC</button>
          <button type="button" value="PlayStation" onClick={handlePlatformClick}>PlayStation</button>
          <button type="button" value="Xbox" onClick={handlePlatformClick}>Xbox</button>
          <button type="button" value="Nintendo" onClick={handlePlatformClick}>Nintendo</button>
          <button type="button" value="Apple Macintosh" onClick={handlePlatformClick}>
            Apple Macintosh</button>
          <button type="button" value="Android" onClick={handlePlatformClick}>Android</button>
          <button type="button" value="iOS" onClick={handlePlatformClick}>iOS</button>
          <button type="button" value="Web" onClick={handlePlatformClick}>Web</button>
        </DivButton>
      </DivPlat>

      <DivGen>
        <Subtittle>Genres</Subtittle>
        <hr />
        <Span>{game.genre.length != 0 ?
          game.genre.map(genre => ` ${gerneName[genre]} |`) :
          'Seleccione al menos un genero!'}</Span>
        <DivButton>
          <button type="button" id="4" onClick={handleGenreClick}>Action</button>
          <button type="button" id="51" onClick={handleGenreClick}>Indie</button>
          <button type="button" id="3" onClick={handleGenreClick}>Adventure</button>
          <button type="button" id="5" onClick={handleGenreClick}>RPG</button>
          <button type="button" id="10" onClick={handleGenreClick}>Strategy</button>
          <button type="button" id="2" onClick={handleGenreClick}>Shooter</button>
          <button type="button" id="14" onClick={handleGenreClick}>Simulation</button>
          <button type="button" id="7" onClick={handleGenreClick}>Puzzle</button>
          <button type="button" id="11" onClick={handleGenreClick}>Arcade</button>
          <button type="button" id="83" onClick={handleGenreClick}>Platformer</button>
          <button type="button" id="1" onClick={handleGenreClick}>Racing</button>
          <button type="button" id="59" onClick={handleGenreClick}>Massively Multiplayer</button>
          <button type="button" id="15" onClick={handleGenreClick}>Sports</button>
          <button type="button" id="6" onClick={handleGenreClick}>Fighting</button>
          <button type="button" id="19" onClick={handleGenreClick}>Family</button>
          <button type="button" id="28" onClick={handleGenreClick}>Board</button>
        </DivButton>
      </DivGen>
      </DivOpciones>}
      </Div1>
    </Div>

  );
}

export default InputsForm;
