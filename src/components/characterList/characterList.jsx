import React from 'react';
import CharacterTile from "../Tile/CharacterTile";
import styles from './characterList.module.css';


function CharacterList({data}) {

    return (
        <main className={styles.characterMain}>
            {data.map((character) =>
                <CharacterTile key={character.id}
                               name={character.name}
                               gender={character.gender}
                               image={character.image}
                               type={character.type}
                               species={character.species}
                               status={character.status}
                               location={character.location.name}
                               origin={character.origin.name}
                               episodes={character.episode}/>)}
        </main>
    );

}

export default CharacterList;