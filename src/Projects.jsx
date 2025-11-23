import NavBar from './Nav-bar.jsx'
import Heading from './Heading.jsx';
import Footer from './Footer.jsx'

function Projects() {
    return(
        <>
            <NavBar home='unselected' skills='unselected' experience='unselected' projects='current-page'/>
            <Heading h1="Projects & Experiments" p={<>Here’s a collection of the projects I’ve designed, built, and improved,<br/>each one shaping my skills and pushing me to create better digital experiences.</>}/>
            <h1>Projects page</h1>
            <h1>Projects page</h1>
            <h1>Projects page</h1>
            <h1>Projects page</h1>
            <Footer quote='Start Your Next Project'/>
        </>
    );
}

export default Projects