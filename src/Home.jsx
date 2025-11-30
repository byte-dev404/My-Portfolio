import NavBar from './Nav-bar.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'
function Home() {

    return(
        <>
            <NavBar home='current-page' skills='unselected' experience='unselected' projects='unselected'/>
            <Hero/>
            <h1>Home page</h1>
            <h1>Home page</h1>
            <h1>Home page</h1>
            <h1>Home page</h1>
            <Footer quote='Let’s Build Together'/>
        </>
    );
}

export default Home