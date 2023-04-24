import styled from "styled-components";

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
width: 1000px;
height: 900px;
margin-left: 150px;
margin-top: 0px;
`;
const DivName = styled.div`
position: absolute;
width: 350px;
left: 100px;
top: 30px;
`;
const DivReleased = styled.div`
position: absolute;
width: 300px;
left: 500px;
top: 30px;
`;
const DivRating = styled.div`
position: absolute;
width: 300px;
left: 500px;
top: 160px;
`;
const Input = styled.input`
width: 300px;
height: 20px;
`;
const DivDesc = styled.div`
position: absolute;
width: 350px;
height: 120px;
left: 100px;
top: 160px;

`;
const InputDesc = styled.input`
width: 350px;
height: 20px;
`;
const DivImg = styled.div`
position: absolute;
width: 300px;
left: 150px;
top: 300px;
`;
const DivImg2 = styled.div`
position: absolute;
width: 300px;
left: 500px;
top: 300px;
`;
const DivPlat = styled.div`
position: absolute;
height: 50px;
width: 600px;
left: 180px;
top: 780px;
`;
const DivGen = styled.div`
position: absolute;
height: 50px;
width: 600px;
left: 180px;
top: 600px;
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

function InputsForm({ handlechage, handleGenreClick, handlePlatformClick, game, errors }) {
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
  return (
    <Div>
      <DivName>
        <label htmlFor="name" ><Subtittle>Name</Subtittle></label>
        <InputDesc type="text" name='name' value={game.name} onChange={handlechage} placeholder="Ingrese un nombre para el juego"/>
        <span>{errors.name}</span>
      </DivName>

      <DivReleased><label htmlFor="released"><Subtittle>Released</Subtittle></label>
        <Input type="text" name='released' value={game.released} onChange={handlechage} placeholder="Ingrese la fecha de lanzamiento"/>
        <span>{errors.released}</span>
      </DivReleased>

      <DivRating><label htmlFor="rating"><Subtittle>Rating</Subtittle></label>
        <Input type="text" name='rating' value={game.rating} onChange={handlechage} placeholder="Ingrese un puntaje del 0 al 5"/>
      <span>{errors.rating}</span>
        </DivRating>

      <DivDesc><label htmlFor="description"><Subtittle>Description</Subtittle></label>
        <InputDesc type="description" name='description' value={game.description} onChange={handlechage} placeholder="Ingrese un texto descriptivo del juego"/>
        <span>{errors.description}</span>
      </DivDesc>

      <DivImg>
      {game.background_image ? 
        <Img src={`${game.background_image}`} alt="" /> : 
        <DivSinImagen><span>imagen no disponible</span></DivSinImagen>}
        <label htmlFor="background_image"><SubtittleImg>Url de imagen</SubtittleImg></label>
        <Input type="text" name='background_image' value={game.background_image} onChange={handlechage} />
        <span>{errors.background_image}</span>
      </DivImg>

      <DivImg2>
      {game.background_image_additional ? 
      <Img src={`${game.background_image_additional}`} alt="" /> :
      <DivSinImagen><span>imagen no disponible</span></DivSinImagen>}
        <label htmlFor="background_image_additional"><SubtittleImg>Url de imagen adicional</SubtittleImg></label>
        <Input type="text" name='background_image_additional' value={game.background_image_additional} onChange={handlechage} />
      <span>{errors.background_image_additional}</span>
        </DivImg2>

      <DivPlat>
      <Subtittle>Plataforms</Subtittle>
      <hr/>
      <Span>{game.parent_platforms.length!=0 ?
      game.parent_platforms.map(plat => ` ${plat} |`):
      'Seleccione al menos una plataforma de las que estan aqui abajo!'}
      </Span>
      <DivButton>
      <button type="button" value="PC" onClick={handlePlatformClick}>PC</button>
      <button type="button" value="PlayStation" onClick={handlePlatformClick}>PlayStation</button>
      <button type="button" value="Xbox" onClick={handlePlatformClick}>Xbox</button>
      <button type="button" value="Nintendo" onClick={handlePlatformClick}>Nintendo</button>
      <button type="button" value="Apple Macintosh" onClick={handlePlatformClick}>Apple Macintosh</button>
      <button type="button" value="Android" onClick={handlePlatformClick}>Android</button>
      <button type="button" value="iOS" onClick={handlePlatformClick}>iOS</button>
      <button type="button" value="Web" onClick={handlePlatformClick}>Web</button>
      </DivButton>
      </DivPlat>


      <DivGen>
      <Subtittle>Genres</Subtittle>
      <hr/>
      <Span>{game.genre.length!=0 ?
      game.genre.map(genre => ` ${gerneName[genre]} |`):
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
    </Div>

  );
}

export default InputsForm;
