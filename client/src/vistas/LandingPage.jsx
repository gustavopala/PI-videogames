import emptyImage from "../imagenes/portada.jpg";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getGames } from "../redux/actions";

const Div = styled.div`
position: relative;
@media screen and (max-width: 420px) {
}
@media screen and (max-width: 280px) { 
}
`;
const Button = styled.button`
z-index: 1;
position: absolute;
right: 60px;
top: 400px;
left: 70px;
width: 400px;
height: 60px;
border: none;
border-radius: 4px;
background-color: #202020;
color: white;
transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #ffd100;
  }
`
const DivText = styled.div`
z-index: 4;
position: absolute;
background-color: #d6d6d6;
left: 0%;
top: 0%;
width: 650px;
height: 609px;
`

const Img = styled.img`
position: absolute;
right: 0px;
top: 0px;
width: 830px;
height: 609px;
opacity: 0.9;
`
const H1 = styled.h1`
z-index: 2;
position: absolute;
color: #202020;
left: 60px;
right: 60px;
top: 150px;
font-weight: bold;
font-size: 40px;
line-height: 48px;
font-weight: 800;
font-family: Inter,sans-serif;
text-align: left;
`
const H4 = styled.h4`
position: absolute;
z-index: 3;
color: #202020;
left: 60px;
right: 50px;
top: 260px;
text-align: left;
font-size: 20px;
line-height: 30px;
font-weight: 600;
font-family: Inter,sans-serif;
`

export default function LandingPage(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleComenzarClick = () => {
        dispatch(getGames());
        navigate('/home');
    }
    return(
        <Div>
            <DivText>
                <H1>ENCUENTRA TU PROXIMO JUEGO!</H1>
                <H4>Descubre una amplia selección de videojuegos, encuentra información detallada y mantente actualizado con los últimos lanzamientos.</H4>
                <Button onClick={handleComenzarClick}><h2>Click aquí para comenzar</h2></Button>
            </DivText>
        <Img src={emptyImage} alt="No characters available" />
        </Div>
    )
}