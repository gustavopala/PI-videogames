import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { filterGames, filterOrigen, ordenAlfabetico, ordenPorRat, stateClean, getGames } from "../redux/actions";
import BotonesNav from "./BotonesNav";
import emptyImage from "../imagenes/home.png";
import emptyImage2 from "../imagenes/agregar.png";


const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
height: 100%;
width: 100%;

`
const Div = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
flex-direction: row;
   width: 100%;
   right: 0px;
   top: 0px;
   height: 100px;
   background-color: #202020;
   
`

const Div2 = styled.div`
    position: absolute;
    left: 0px;
    top: 100px;
    width: 200px;
    height: 100%;
    
   
`
const Button = styled.button`
width: 130px;
height: 70px;
border: none;
border-radius: 10px;
background-color: #202020;
margin-left: 15px;
margin-top: 15px;
outline: none;

@media screen and (max-width: 280px) {
   width: 190px;
 }
`
const LinkStyle = styled(Link)`


color: white;

font-size: 10px;
line-height: 12px;
font-weight: 400;
font-family: Arial, sans-serif;
font-weight: bold;

text-decoration: none;
@media screen and (max-width: 280px) {
   
 }
`
const Img = styled.img`
margin-left: 25px;
margin-right: 25px;

@media screen and (max-width: 280px) {
   
 }
`

export default function Home() {
    const dispatch = useDispatch();
    const location = useLocation([]);
    const handleChange = (event) => {
        dispatch(stateClean())
        dispatch(filterGames(event.target.value))
    }
    const handleChan = (event) => {
        dispatch(filterOrigen(event.target.value))
    }
    const handleChangeOrdenAlfa = (event) => {
        dispatch(ordenAlfabetico(event.target.value))
    }
    const handleChangeOrdenRat = (event) => {
        dispatch(ordenPorRat(event.target.value))
    }
    const backHome = () =>{
        dispatch(stateClean())
        dispatch(getGames());
    }
    return (
        <Container>

            <Div>
                <SearchBar />
                <Button onClick={() => backHome()}>
                    <LinkStyle to='/home' >
                    <Img src={emptyImage} alt="No characters available" />
                    HOME
                    </LinkStyle>
                </Button>
                <Button>     
                <LinkStyle to='/createGame'>
                 <Img src={emptyImage2} alt="No characters available" />
                    CREAR JUEGO
                    </LinkStyle>
                </Button>
                {(location.pathname === '/home'|| location.pathname === '/search') &&
                <Div2>

                    <BotonesNav
                        handleChange={handleChange}
                        handleChan={handleChan}
                        handleChangeOrdenAlfa={handleChangeOrdenAlfa}
                        handleChangeOrdenRat={handleChangeOrdenRat}
                    />
                </Div2>}


            </Div>
        </Container>
    )
}