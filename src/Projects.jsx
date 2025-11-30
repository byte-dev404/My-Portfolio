import { useState, useEffect } from 'react'
import NavBar from './Nav-bar.jsx'
import Heading from './Heading.jsx'
import styles from './Projects.module.css'
import myPortfolioImg from "./assets/Place holder for my portfolio.svg"
import flemingElectricImg from "./assets/Fleming Electric.png"
import caterWootenImg from "./assets/Cater Wooten.png"
import pixelRunnerImg from "./assets/Pixel Runner.png"
import drumMachineImg from "./assets/Drum Machine.jpeg"
import palindromeCheckerImg from "./assets/Palindrome Checker.jpeg"
import regexSandboxImg from "./assets/Regex Sandbox.jpeg"
import charCounterImg from "./assets/Character Counter.jpeg"
import mdToHtmlConverterImg from "./assets/Markdown To Html Converter.jpeg"
import complaintFormImg from "./assets/Complaint Form.jpeg"
import chatJeopardyImg from "./assets/Chat Jeopardy.png"
import miniContactImg from "./assets/Mini Contact.jpeg"
import jsDocumentationImg from "./assets/JS Documentation.png"
import moonOrbitImg from "./assets/Moon Orbit.jpeg"
import newspaperArticleImg from "./assets/Newspaper Article.jpeg"
import cardsImg from "./assets/Cards.jpeg"
import confidentialEmailImg from "./assets/Confidential email.jpeg"
import Footer from './Footer.jsx'

function Projects() {
    const projects = [
        {
            "imgSrc": myPortfolioImg,
            "altText": "My portfolio website's image",
            "title": "My Portfolio Website",
            "tech": "Figma, CSS, React.js, Vite, Netlify",
            "paragraph": "A fully custom portfolio built with React to showcase my work, skills, and journey, all designed and developed by me from the ground up.",
            "project-link": "Currently in Development"
        },
        {
            "imgSrc": flemingElectricImg,
            "altText": "Fleming Electric website's image",
            "title": "Fleming Electric's Website",
            "tech": "Tailwind, React.js, Vite, Netlify",
            "paragraph": "A responsive, conversion-focused website built for my client Casey Fleming. Designed to highlight services, improve credibility, and boost local search visibility.",
            "project-link": "fleming-electric.netlify.app"
        },
        {
            "imgSrc": caterWootenImg,
            "altText": "Cater Wooten portfolio site's image",
            "title": "Carter Wooten Portfolio",
            "tech": "Html, CSS, JavaScript, Netlify",
            "paragraph": 'A clean, professional portfolio built to help "Carter Wooten" present their work, strengthen their online presence, and rank better on Google',
            "project-link": "carter-wooten-portfolio.netlify.app"
        },
        {
            "imgSrc": pixelRunnerImg,
            "altText": 'Pixel Runner home screen image',
            "title": "Pixel Runner",
            "tech": "Lua, Love2D",
            "paragraph": "A fast-paced 2D endless runner built with Love2D and Lua. Focused on smooth gameplay, responsive controls, and humorous visuals.",
            "project-link": "Donwload link"
        },
        {
            "imgSrc": drumMachineImg,
            "altText": 'Drum Machine project image',
            "title": "Drum Machine Project",
            "tech": "Html, CSS & JavaScript",
            "paragraph": "A fun interactive drum machine where you press buttons and create different sounds, I created it during freeCodeCamp. It helped me master the Web Audio API, DOM manipulation, and real-time event handling.",
            "project-link": "dev-404s-drum-machine-project.netlify.app"
        },
        {
            "imgSrc": palindromeCheckerImg,
            "altText": 'Palindrome Checker project image',
            "title": "Palindrome checker Project",
            "tech": "Html, CSS & JavaScript",
            "paragraph": "A simple tool that checks whether a word is a palindrome. Built during freeCodeCamp to practice DOM handling, input validation, and custom logic in JavaScript.",
            "project-link": "dev-404s-palindrome-checker-project.netlify.app"
        },
        {
            "imgSrc": regexSandboxImg,
            "altText": 'Regex Sendbox project image',
            "title": "Regex Sendbox Project",
            "tech": "Html, CSS & JavaScript",
            "paragraph": "It's a live regex (Regular Expressions) testing sandbox built to understand pattern matching during freeCodeCamp. Strengthened my skills in JavaScript logic, error handling, and UI clarity.",
            "project-link": "regex-sandbox-project.netlify.app"
        },
        {
            "imgSrc": charCounterImg,
            "altText": 'Character Counter project image',
            "title": "Real-time character counter Project",
            "tech": "Html, CSS & JavaScript",
            "paragraph": "A small interactive tool I built at freeCodeCamp's full stack developer curriculum to practice event handling. Counts characters in real time and reinforces the basics of dynamic UI updates with JavaScript.",
            "project-link": "dev-404s-character-counter-project.netlify.app"
        },
        {
            "imgSrc": mdToHtmlConverterImg,
            "altText": 'Makdown to HTML Converter project image',
            "title": "Makdown to HTML converter Project",
            "tech": "Html, CSS & JavaScript",
            "paragraph": "A converter that transforms Markdown into HTML instantly. Built in freeCodeCamp to learn more advanced JavaScript logic and multi-step content processing on the frontend.",
            "project-link": "markdown-to-html-converter-project.netlify.app"
        },
        {
            "imgSrc": complaintFormImg,
            "altText": 'Customer Complaint Form project image',
            "title": "Customer complaint form project",
            "tech": "Html, CSS & JavaScript",
            "paragraph": "A multi-field, validation-ready complaint form built with pure HTML, CSS, and JavaScript during freeCodeCamp. Designed to practice form handling and clean UI structure.",
            "project-link": "customer-complaint-form-project.netlify.app"
        },
        {
            "imgSrc": chatJeopardyImg,
            "altText": 'Chat Jeopardy project image',
            "title": "Chat Jeopardy project",
            "tech": "Html, CSS",
            "paragraph": "Chat Jeopardy is a UI clone of ChatGPT that I built as a side project to challenge and sharpen my CSS skills. Through this project, I strengthened my understanding of Flexbox, Grid layouts, animations, and other core CSS concepts.",
            "project-link": "chat-jeopardy.netlify.app"
        },
        {
            "imgSrc": miniContactImg,
            "altText": 'Contact Form project image',
            "title": "Mini Contact Form project",
            "tech": "Html, CSS",
            "paragraph": "A simple, clean contact form created with HTML and CSS during freeCodeCamp's full stack developer curriculum to practice layout, form styling, and user-friendly design principles.",
            "project-link": "mini-contact-form-project.netlify.app"
        },
        {
            "imgSrc": jsDocumentationImg,
            "altText": 'JS documentation project image',
            "title": "JavaScript documentation Project",
            "tech": "Html, CSS",
            "paragraph": "This is a static content rich web project I built as a part of freeCodeCamp's full stack developer curriculum to explore content layout, sidebar navigation, and making text-heavy pages visually appealing.",
            "project-link": "javascript-documentation-page-project.netlify.app"
        },
        {
            "imgSrc": moonOrbitImg,
            "altText": 'Moon orbit project image',
            "title": "Moon orbit Project",
            "tech": "Html, CSS",
            "paragraph": "A simple but satisfying visual animation of the Moon orbiting Earth. Built to understand CSS keyframes, motion timing, and visual hierarchy, during freeCodeCamp's full stack developer curriculum.",
            "project-link": "moon-orbit-project.netlify.app"
        },
        {
            "imgSrc": newspaperArticleImg,
            "altText": 'Newspaper Article project image',
            "title": "Newspaper Article Project",
            "tech": "Html, CSS",
            "paragraph": "This is a sarcastic Newspaper Article project I built during freeCodeCamp, to practice typography, semantic structure, and readable formatting using only HTML and CSS.",
            "project-link": "newspaper-article-project.netlify.app"
        },
        {
            "imgSrc": cardsImg,
            "altText": 'Cards project image',
            "title": "Cards project",
            "tech": "Html, CSS",
            "paragraph": "A small CSS focused project I built as a part of freeCodeCamp's full stack developer curriculum, exploring card layouts, spacing, shadows, and visual hierarchy to create clean UI components.",
            "project-link": "dev-404s-cards-project.netlify.app"
        },
        {
            "imgSrc": confidentialEmailImg,
            "altText": 'Confidential Email project image',
            "title": "Confidential Email project",
            "tech": "Html, CSS",
            "paragraph": "A minimal email style layout built during freeCodeCamp to practice typography, spacing, and component structure using pure HTML and CSS.",
            "project-link": "confidential-email-project.netlify.app"
        },
    ]
    const [card, setCard] = useState(null);

    useEffect(() => {
        if (card) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [card]);

    function handleImageClick(e) {
        if (e.target.tagName !== "IMG") return;

        const id = Number(e.target.dataset.id)
        setCard(projects[id]);
    }

    return(
        <>
            <NavBar home='unselected' skills='unselected' experience='unselected' projects='current-page'/>
            <Heading h1="Projects & Experiments" p={<>Here’s a collection of the projects I’ve designed, built, and improved,<br/>each one shaping my skills and pushing me to create better digital experiences.</>}/>
            <main onClick={handleImageClick} className={styles['projects-container']}>
                {projects.map((project, index) => 
                    <img data-id={index}
                    className={styles.image}
                    src={project.imgSrc}
                    alt={project.altText}
                    />
                )};

                {/* <img data-id="1"
                    className={styles.image} 
                    src={myPortfolioImg}
                    alt="My portfolio website's image"
                />

                <img data-id="2"
                    className={styles.image} 
                    src={flemingElectricImg}
                    alt="Fleming Electric website's image"
                />

                <img data-id="3"
                    className={styles.image} 
                    src={caterWootenImg}
                    alt="Cater Wooten portfolio site's image"
                />

                <img data-id="4"
                    className={styles.image}  
                    src={pixelRunnerImg}
                    alt="Pixel Runner home screen image"
                />

                <img data-id="5"
                    className={styles.image}  
                    src={drumMachineImg}
                    alt="Drum Machine project image"
                />

                <img data-id="6"
                    className={styles.image}  
                    src={palindromeCheckerImg}
                    alt="Palindrome Checker project image"
                />

                <img data-id="7"
                    className={styles.image}  
                    src={regexSandboxImg}
                    alt="Regex Sendbox project image"
                />

                <img data-id="8"
                    className={styles.image}  
                    src={charCounterImg}
                    alt="Character Counter project image"
                />

                <img data-id="9"
                    className={styles.image} 
                    src={mdToHtmlConverterImg}
                    alt="Makdown to HTML Converter project image"
                />

                <img data-id="10"
                    className={styles.image}  
                    src={complaintFormImg}
                    alt="Customer Complaint Form project image"
                />

                <img data-id="11"
                    className={styles.image}  
                    src={chatJeopardyImg}
                    alt="Chat Jeopardy project image"
                />

                <img data-id="12"
                    className={styles.image} 
                    src={miniContactImg}
                    alt="Contact Form project image"
                />

                <img data-id="13"
                    className={styles.image} 
                    src={jsDocumentationImg}
                    alt="JS documentation project image"
                />

                <img data-id="14"
                    className={styles.image}  
                    src={moonOrbitImg}
                    alt="Moon orbit project image"
                />

                <img data-id="17"
                    className={styles.image} 
                    src={confidentialEmailImg}
                    alt="Confidential Email project image"
                />

                <img data-id="15"
                    className={styles.image} 
                    src={newspaperArticleImg}
                    alt="Newspaper Article project image"
                />

                <img data-id="16"
                    className={styles.image}  
                    src={cardsImg}
                    alt="Cards project image"
                /> */}
            </main>
            {card && (
                <div className={[styles.overlay, styles.active].join(' ')}>
                    <div className={styles.card}>
                        <section className={styles.intro}>
                            <img src={card['imgSrc']}/>
                            <h2>{card.title}</h2>
                        </section>

                        <section className={styles.details}>
                            <h3>Made with: {card.tech}</h3>
                            <p>{card.paragraph}</p>
                        </section>
                        <div className={styles['button-container']}>
                            <button className={styles['btn-1']}><a target="_blank" href={`https://${card['project-link']}`}>VIEW PROJECT</a></button>
                            <button onClick={() => setCard(null)} className={styles['btn-2']}>BACK</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer quote='Start Your Next Project'/>
        </>
    );
}

export default Projects