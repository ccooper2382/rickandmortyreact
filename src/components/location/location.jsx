import styles from './location.module.css'

function Location({location, origin}) {

    if (location === origin) {
        return <div>
            <h2>Location/Origin</h2>
            <span>{location}</span>
        </div>
    }
    return (
        <div className={styles.location__block}>
        <div className={styles.location__stats}>
            <h2>Last Known Location</h2>
            <span>{location}</span>
        </div>
        <div className={styles.location__stats}>
            <h2>Origin</h2>
            <span>{origin}</span>
        </div>
        </div>
    );

}

export default Location;