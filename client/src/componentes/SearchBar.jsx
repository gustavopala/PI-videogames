import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchGames, stateClean } from "../redux/actions";
import { useNavigate } from 'react-router-dom';

const Input = styled.input`
   width: 400px;
   height: 30px;
   border: none;
   border-radius: 10px;
   background-color: #d6d6d6;
   outline: none;
   @media screen and (max-width: 280px) {
      width: 190px;
    }
`
const Button = styled.button`
   margin-top: 1px;
   height: 30px;
   margin-left: 5px;
   border: none;
   background-color: #ffd100;
`
const InputWrapper = styled.div`

  align-items: center;
  width: 500px;
  height: 30px;
  margin-top: 35px;
  margin-left: 280px;
  margin-right: 100px;
  background-color: #202020;
  outline: none;
`;

export default function SearchBar() {
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const dispatch = useDispatch();
   const handlechage = (event) => {
      setName(event.target.value);
   }

   const onsearch = () => {
      dispatch(stateClean());
      dispatch(searchGames(name));
      setName('');
      navigate('/search');
   }

   return (
      <InputWrapper>
         <Input type='search' value={name} onChange={handlechage} placeholder="Buscar juegos..."/>
         <Button onClick={onsearch}>search</Button>
      </InputWrapper>
   );
}