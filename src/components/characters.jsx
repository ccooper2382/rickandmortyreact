import React, {Fragment} from 'react';
import CharacterTile from "./characterTile";
import styles from '../App.module.css'
import Pagination from "./pagination";


function Characters({data, onPrev, onNext, currentPage}) {



    return (
        <Fragment>
        <div className={styles.flexContainer}>
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
        </div>
    <Pagination max={data.info.pages} current={currentPage} onNext={onNext} onPrev={onPrev}/>
        </Fragment>
    );

}

export default Characters;