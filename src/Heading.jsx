import styles from './heading.module.css'

function Heading({ h1, p }) {
    return(
        <header className={styles.heading}>
            <h1>{h1}</h1>
            <p>{p}</p>
        </header>
    );
}

export default Heading