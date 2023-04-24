import Card from './Card';
import styled from "styled-components";



const Div = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
height: 100%;
width: 100%;
background-color: #333533;
`;

export default function Cards({ gamesToDisplay }) {

    return (
        <Div>
            {gamesToDisplay.map(({ id, background_image, name, parent_platforms, rating, released }) => (
                <Card
                    key={id}
                    id={id}
                    name={name}
                    parent_platforms={parent_platforms}
                    rating={rating}
                    background_image={background_image}
                    released={released}
                />
            ))}

        </Div>

    )
}
