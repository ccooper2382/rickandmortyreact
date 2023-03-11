import React from 'react';
import CharacterTile from "./characterTile";
import styles from './App.module.css'

function Characters({data}) {

    if (data === undefined) return <div>this is dumb</div>

    return (

        <div className={styles.flexContainer}>
            {data.map((character) => <CharacterTile key={character.id}
                                                    name={character.name}
                                                    gender={character.gender}
                                                    image={character.image}
                                                    type={character.type}
                                                    species={character.species}
                                                    status={character.status}
                                                    location={character.location.name}
                                                    origin={character.origin.name}/>)}
        </div>
    );

}

export default Characters;