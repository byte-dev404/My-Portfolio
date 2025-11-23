import { Link } from "react-router-dom";
import { useState } from 'react';
import './Nav-bar.css'

function NavigationBar({ home='current-page', skills='unselected', experience='unselected', projects='unselected' }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return(
        <nav className='Navigation-bar'>
            <div className="Logo">
                <img src="src/assets/my logo.png" alt="My logo" />
                <p>DEV-404</p>
            </div>

            {!sidebarOpen && (
                <button className='open-sidebar-btn' onClick={() => setSidebarOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="43px" viewBox="0 -960 960 960" width="43px" fill="hsl(27, 100%, 50%)"><path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z"/></svg>
                </button>
            )}

            <ul className={`Pages ${sidebarOpen ? "open" : ""}`}>
                <li className='close-sidebar-btn-li'>
                    <button className='close-sidebar-btn' onClick={() => setSidebarOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="hsl(27, 100%, 50%)"><path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z"/></svg>
                    </button>
                </li>
                <li><Link to="/" id={home}>Home</Link></li>
                <li><Link to="/skills" id={skills}>Skills</Link></li>
                <li><Link to="/experience" id={experience}>Experience</Link></li>
                <li><Link to="/projects" id={projects}>Projects</Link></li>
            </ul>
        </nav>
    );
}

export default NavigationBar