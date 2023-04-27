import styled from "styled-components";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import CardDetail from '../componentes/CardDetail'
const URL_BASE = "http://localhost:3001/"

export default function Detail() {
    const { detailId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [game, setGame] = useState({});
  
    useEffect(() => {
      const fetchGame = async () => {
        try {
          const response = await axios.get(`${URL_BASE}videogames/${detailId}`);
          setGame(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchGame();
    }, [detailId]);

    const { id, background_image,background_image_additional,description, name, genres, parent_platforms, rating, released } = game;
    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p>
                ) : (
                  <CardDetail id={id} 
                  background_image={background_image} 
                  background_image_additional={background_image_additional} 
                  description={description} 
                  name={name} 
                  genres={genres} 
                  parent_platforms={parent_platforms} 
                  rating={rating} 
                  released={released}/>     
                )
            }
        </div>
    );
}