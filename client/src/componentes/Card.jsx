import { Link } from "react-router-dom";
import styled from "styled-components";


const Rat = styled.h2`
  position: absolute;
  font-size: 15px;
  left: 15px;
  right: 20px;
  top:10px;
  color: white;
  text-align: center;
  opacity: 0;
  transition: top 0.3s ease-in-out, opacity  0.3s ease-in-out;
`;

const Released = styled.h2`
  position: absolute;
  font-size: 15px;
  left: 15px;
  right: 20px;
  top:10px;
  color: white;
  text-align: center;
  opacity: 0;
  transition: top 0.3s ease-in-out, opacity  0.3s ease-in-out;
`;

const Plat = styled.h2`
  position: absolute;
  font-size: 14px;
  left: 15px;
  right: 20px;
  top:10px;
  color: white;
  text-align: center;
  opacity: 0;
  transition: top 0.3s ease-in-out, opacity  0.3s ease-in-out;
`;
const Divtext = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border: none;
  top: 100px;
  background-color:rgba(38, 39, 40, 0.68);
  transition: top 0.3s ease-in-out, border-radius 0.3s ease-in-out;
  
`;
const DivCard = styled.div`
position: relative;
  height: 180px;
  background-color: white;
  width: 280px;
  border-radius: 10px;
 
  margin-left: 20px;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  box-shadow: 0px 0px 10px #202020;
  @media screen and (max-width: 420px) {
    margin-left: 12%;
  }
  @media screen and (max-width: 280px) {
    margin-left: 1px;
    margin-right: 1px;
  }
  &:hover ${Rat}{
    top:60px;
    opacity: 1;
  }
   &:hover ${Released}{
    top: 90px;
    opacity: 1;
   } 
   &:hover ${Plat} {
    top: 120px; 
    opacity: 1;
  }
  &:hover ${Divtext}{
    top: 0px;
    border-radius: 10px;
  }
`;
const Name = styled.h1`
  position: absolute;
  top: 0px;
  left: 10px;
  color: white;
  font-size: 130%;
  line-height: 23px;
  text-align: left;
`;
const Img = styled.img`
 
  border-radius: 10px;
 
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom 0px;
  width: 100%;
  height: 100%;
`
export default function Card({ id, parent_platforms, background_image, name, rating, released }) {
  return (
    
    <Link to={`/detail/${id}`} >
      <DivCard>
        <Divtext>
          <Name>{name}</Name>
          <Plat>{parent_platforms.join('|')}</Plat>
          <Released>{released}</Released>
          <Rat>rating: {rating}</Rat>
        </Divtext>
        <Img src={background_image} alt="" />
      </DivCard>
    </Link>
  );
}


