import React from 'react';
import Title from "../title/title";
import Episodes from "../episodes/episodes";
import Location from "../location/location";
import styles from './tile.module.css';

function CharacterTile({name, status, species, type, gender, image, location, origin, episodes, info}) {

    return (
        <section className={styles.flexContainer}>
            <Title name={name} species={species} status={status} image={image} type={type} gender={gender}
                   origin={origin} location={location}/>
            <Location location={location} origin={origin}/>
            <Episodes episodes={episodes}/>
            <div className='blah'>{info}</div>
        </section>

    );
}

export default CharacterTile;