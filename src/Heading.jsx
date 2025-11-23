import './heading.css'

function Heading({ h1, p }) {
    return(
        <header>
            <h1>{h1}</h1>
            <p>{p}</p>
        </header>
    );
}

export default Heading