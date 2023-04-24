import styled from "styled-components";
import { useState } from "react";

const Button = styled.button`
  position: absolute;
  z-index: 0;
  left: 15px;
  top: 140px;
  color: ${props => props.descriptionON ? '#202020' : 'white'};
  background-color: ${props => props.descriptionON ? '#ffd100' : '#202020'};
  width: 200px;
  height: 35px;
  border: none;
  font-size: 15px;
  line-height: 0px;
  font-weight: 400;
  font-family: Arial, sans-serif;
  font-weight: bold;
`

const Rat = styled.h2`
  position: absolute;
  left: 30px;
  top: 60px;
  font-size: 15px;
  color: white;
  text-align: center;
  `;

const Plat = styled.h2`
  position: absolute;
  left: 340px;
  top: 60px;
  font-size: 15px;
  color: white;
  text-align: center;
  `;
const Released = styled.h2`
  position: absolute;
  left: 200px;
  top: 60px;
  font-size: 15px;
  color: white;
  text-align: center;
`;

const Genre = styled.h2`
  position: absolute;
  left: 30px;
  top: 95px;
  font-size: 15px;
  color: white;
  text-align: center;
`;
const DivTitle = styled.div`
  position: absolute;
  z-index: 3;
  left: 0px;
  height: 60px;
  width: 1000px;
  top: 0px;
  background-color: #202020;
`;
const Divtext = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 0px;
  top: 300px;
`;
const DivCard = styled.div`
position: relative;
  height: 507px;
  width: 1000px;
  margin-left: 100px;
  margin-top: 0px;
  @media screen and (max-width: 420px) {
    margin-left: 12%;
  }
  @media screen and (max-width: 280px) {
    margin-left: 1px;
    margin-right: 1px;
  }

`;
const Name = styled.h1`
  position: absolute;
  top: 0px;
  left: 20px;
  color: white;
  font-size: 25px;
  line-height: 23px;
  text-align: left;
`;
const Img = styled.img`
box-shadow: 0px 0px 10px #202020;
  position: absolute;
  left: 0px;
  top: 0px;

  width: 500px;
  height: 300px;
`
const Img2 = styled.img`
box-shadow: 0px 0px 10px #202020;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 500px;
  height: 300px;
`
const Descrip = styled.p`
  margin-top: 175px;
  padding: 20px;
  width: 1000px;
  font-size: 15px;
  font-weight: 400;
  font-family: Arial, sans-serif;
  line-height: 23px;
  font-weight: bold;
  text-align: left;
  color: white;
`
export default function CardDetail({ background_image, background_image_additional, description, name, genres, parent_platforms, rating, released }) {
  const [descriptionON, setDescriptionON] = useState(false);
  const strippedDescription = description.replace(/(<([^>]+)>)/gi, "");
  
  const handleDescrip = () => {
    let bandera = !descriptionON
    setDescriptionON(bandera);
    
  }
  return (
    <DivCard>
      <Img src={background_image} alt="" />
      <Img2 src={background_image_additional} alt="" />
      <Divtext>
        <DivTitle>
          <Name>{name}</Name>
        </DivTitle>
        <Rat>rating: {rating}</Rat>
        <Released> {released}</Released>
        <Genre>{genres.join(' | ')}</Genre>
        <Plat>{parent_platforms.join(' | ')}</Plat>
        <Button descriptionON={descriptionON} onClick={handleDescrip}>
          Descripcion {descriptionON ? '[ver menos]':'[ver mas]'}
        </Button>
        {descriptionON && (<Descrip>{strippedDescription}</Descrip>)}
      </Divtext>
    </DivCard>
  );
}
