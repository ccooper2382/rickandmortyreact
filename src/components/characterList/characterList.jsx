import React, {Fragment} from 'react';
import CharacterTile from "../Tile/characterTile";
import styles from './characterList.module.css'
import Pagination from "../pagination/pagination";


function CharacterList({data, onPrev, onNext, currentPage}) {



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
            <Pagination max={data.info.pages} current={currentPage} onNext={onNext} onPrev={onPrev}/>

        </div>


    );

}

export default CharacterList;