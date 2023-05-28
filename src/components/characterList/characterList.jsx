import React from 'react';
import CharacterTile from "../Tile/characterTile";
import Pagination from "../pagination/pagination";
import styles from './characterList.module.css';


function CharacterList({data}) {



    return (

        <div className={styles.characterMain}>
            {data.results.map((character) => <CharacterTile key={character.id}
                                                    name={character.name}
                                                    gender={character.gender}
                                                    image={character.image}
                                                    type={character.type}
                                                    species={character.species}
                                                    status={character.status}
                                                    location={character.location.name}
                                                    origin={character.origin.name}
                                                    episodes={character.episode}/>)}
            {/*<Pagination max={data.info.pages} current={currentPage} onNext={onNext} onPrev={onPrev}/>*/}

        </div>


    );

}

export default CharacterList;