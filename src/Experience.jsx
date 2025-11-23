import NavBar from './Nav-bar.jsx'
import Heading from './Heading.jsx';
import Footer from './Footer.jsx'

function Experience() {
    
    return(
        <>
            <NavBar home='unselected' skills='unselected' experience='current-page' projects='unselected'/>
            <Heading h1='My Experience Path' p={<>Every project I take on challenges me to think sharper, build better, and grow as a developer.<br/>Here's a look at the work that shaped my skills and approach.</>}/>
            <h1>Experience page</h1>
            <h1>Experience page</h1>
            <h1>Experience page</h1>
            <h1>Experience page</h1>
            <Footer quote='Bring Your Idea to Life'/>
        </>
    );
}

export default Experience