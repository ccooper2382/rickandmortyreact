import React from 'react';
import Character from "./character";

function Characters({data}) {

    return (

        <div>
            {data.map((character) => <Character key = {character.id}
                                                name={character.name}
                                                gender={character.gender}
                                                image={character.image}
                                                type={character.type}
                                                species={character.species}
                                                status={character.status}/>) }

        </div>
    );

}

export default Characters;