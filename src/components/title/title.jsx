import React from 'react';
import styles from './title.module.css'
import TitleStats from "./TitleStats";


function Title({image, name, status, species, type, gender,}) {
    return (
        <section className={styles.character__Title}>
            <div className={styles.character__portrait}>
                <img className={styles.character__image} src={image} alt={name}></img>
            </div>
            <TitleStats name={name} species={species} status={status} type={type} gender={gender}/>
        </section>
    );
}

export default Title;