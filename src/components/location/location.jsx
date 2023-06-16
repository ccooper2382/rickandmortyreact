import styles from './location.module.css'

function Location({location, origin}) {

    return location === origin ? (
        <section className={styles.location__stats}>
            <h2>Location/Origin</h2>
            <span>{location}</span>
        </section>
    ) : (
        <section className={styles.location__block}>
            <div className={styles.location__stats}>
                <h2>Origin</h2>
                <span>{origin}</span>
            </div>
            <div className={styles.location__stats}>
                <h2>Last Known Location</h2>
                <span>{location}</span>
            </div>
        </section>
    );

}

export default Location;