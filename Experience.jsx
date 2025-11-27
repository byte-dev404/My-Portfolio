import { useState, useEffect } from 'react'
import styles from './Experience.module.css'
import NavBar from './Nav-bar.jsx'
import Heading from './Heading.jsx';
import Footer from './Footer.jsx'
import pixelRunnerImg from "./assets/Pixel Runner.png"
import myAgencyImg from './assets/Down for maintenence.jpg'

function Experience() {
    const experienceData = [
        {
            'src': myAgencyImg,
            'alt': 'My own tech solutions logo',
            'short-title': 'My Agency',
            'full-title': 'My Tech Solutions Agency', 
            'duration': 'March 2025 – Present',
            'position': 'CEO, Designer, Developer, Marketer & Sales Lead',
            'overview': 'As the founder and CEO of my own tech solutions agency, I lead the business strategy, design direction, and technical execution across all projects. My work involves managing cross-functional areas including UX/UI design, web and app development, automation systems, digital marketing, and client relations. I oversee every stage, from concept to delivery, ensuring quality, performance, and measurable growth for clients.',
            'responsibilities': '<li>Strategic decision-making and business development</li> <li>UX/UI design and user experience optimization</li> <li>Custom automation systems and workflow development</li> <li>Building responsive websites, apps, and client portfolios</li> <li>Lead generation, inbound/outbound outreach, and sales funnel design</li> <li>Managing email campaigns and social media marketing initiatives</li> <li>Conducting sales meetings, client onboarding, and customer support</li>',
            'achievements': "Boosted client conversion rates by 23% through a complete landing page redesign and optimized CTA funnel that simplified the onboarding process.<br/><br/>Reduced manual data entry workload by 68% by developing an automated lead generation system capable of scraping niche-specific data from platforms such as LinkedIn, Instagram, Facebook, and Google Maps, and exporting it to Excel/CSV files.<br/><br/>Increased email outreach efficiency by 95% by engineering an AI-powered workflow that reads lead data, generates personalized email copy using a fine-tuned Claude model, and delivers messages securely via TLS/SSL.<br/><br/>Decreased Client Acquisition Cost (CAC) by 40% through the implementation of custom AI chatbot and voice caller systems, improving response time and user experience while increasing positive client reviews by 23%.<br/><br/>Designed and deployed multiple custom websites and portfolios, strengthening clients digital presence, brand engagement, and overall conversion performance."
        },
        {
            'src': pixelRunnerImg,
            'alt': 'Pixel Runner home screen image',
            'short-title': 'Game Developer',
            'full-title': 'Game Developer', 
            'duration': 'Nov 2024 – Jan 2025',
            'position': 'Designer, Developer',
            'overview': 'Pixel Runner is a fast-paced 2D endless runner game designed and developed independently as a personal learning project. The goal was to create an engaging, visually appealing experience that balances simple controls with progressively challenging gameplay. Throughout the project, I focused on combining smooth animation, intuitive design, and optimized performance to deliver a polished player experience across devices.',
            'responsibilities': '<li>Designed vibrant, humorous visuals and animations to make the game fun and visually distinctive.</li> <li>Created a responsive UX/UI layout ensuring consistent performance and playability on various screen sizes.</li> <li>Developed core gameplay systems including player movement, gravity, obstacle generation, and progressive difficulty mechanics.</li> <li>Implemented clean, modular code structure for smoother updates and scalability.</li>',
            'achievements': 'Gained a solid understanding of essential game development concepts such as event loops, gravity physics, collision handling, obstacle spawning algorithms, vector graphics, and incremental difficulty systems.<br/><br/>Completed Play Store packaging and submission processes; however, publishing was prevented due to a developer console account suspension received during the release attempt. This experience taught me the full deployment workflow and remediation steps required for store publishing.<br/><br/>Enhanced creative and problem-solving skills by managing both the design and development lifecycle from concept to release.<br/><br/>'
        }
    ];

    const [xpCard, setXpCard] = useState(null);
    useEffect(() => {
        if (xpCard) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [xpCard]);
    
    function openXpCard(id) {
        setXpCard(experienceData[id])
    }

    return(
        <>
            <NavBar home='unselected' skills='unselected' experience='current-page' projects='unselected'/>
            <Heading h1='My Experience Path' p={<>Every project I take on challenges me to think sharper, build better, and grow as a developer.<br/>Here's a look at the work that shaped my skills and approach.</>}/>
            <main className={styles["experience-container"]}>
                <div className={styles.timeline}>
                    <div className={styles['card-container']}>
                        <div className={styles.card}>   
                            <h2>{experienceData[0]['short-title']}</h2>
                            <img src={experienceData[0].src} alt={experienceData[0].alt}/>
                        </div>   
                        <button onClick={() => openXpCard(0)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_424_48)"><path d="M7.15514 3.94182C6.21226 3.97849 5.36082 4.31486 4.90533 4.77046C4.69381 4.98203 4.35083 4.98203 4.13931 4.77051C3.92773 4.55905 3.92768 4.21606 4.1392 4.00449C4.84196 3.30162 5.98563 2.90317 7.113 2.8593C8.24774 2.81515 9.48658 3.12585 10.3542 3.9936C10.5656 4.20512 10.5656 4.5481 10.3541 4.75963C10.1425 4.97115 9.79956 4.97109 9.58804 4.75957C8.99708 4.16845 8.0906 3.90542 7.15514 3.94182Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12.6734 11.8331C13.7091 10.607 14.3333 9.02224 14.3333 7.29167C14.3333 3.40266 11.1807 0.25 7.29167 0.25C3.40266 0.25 0.25 3.40266 0.25 7.29167C0.25 11.1807 3.40266 14.3333 7.29167 14.3333C9.02224 14.3333 10.607 13.7091 11.8331 12.6734L11.625 13.8698L15.6949 17.9397L17.9397 15.6949L13.8698 11.625L12.6734 11.8331ZM7.29167 12.7083C10.2832 12.7083 12.7083 10.2832 12.7083 7.29167C12.7083 4.30015 10.2832 1.875 7.29167 1.875C4.30015 1.875 1.875 4.30015 1.875 7.29167C1.875 10.2832 4.30015 12.7083 7.29167 12.7083Z"/><path d="M16.4609 18.7057L18.7057 16.4609L19.4401 17.1953C19.8533 17.6086 19.8533 18.2786 19.4401 18.6918L18.6918 19.4401C18.2786 19.8533 17.6086 19.8533 17.1953 19.4401L16.4609 18.7057Z"/></g><defs><clipPath id="clip0_424_48"><rect width="20" height="20"/></clipPath></defs></svg>
                            <span>LEARN MORE</span>
                        </button> 
                    </div>
                    <div className={styles['card-container']}>
                        <div className={styles.card}>   
                            <h2>{experienceData[1]['short-title']}</h2>
                            <img src={experienceData[1].src} alt={experienceData[1].alt}/>
                        </div>   
                        <button onClick={() => openXpCard(1)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_424_48)"><path d="M7.15514 3.94182C6.21226 3.97849 5.36082 4.31486 4.90533 4.77046C4.69381 4.98203 4.35083 4.98203 4.13931 4.77051C3.92773 4.55905 3.92768 4.21606 4.1392 4.00449C4.84196 3.30162 5.98563 2.90317 7.113 2.8593C8.24774 2.81515 9.48658 3.12585 10.3542 3.9936C10.5656 4.20512 10.5656 4.5481 10.3541 4.75963C10.1425 4.97115 9.79956 4.97109 9.58804 4.75957C8.99708 4.16845 8.0906 3.90542 7.15514 3.94182Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12.6734 11.8331C13.7091 10.607 14.3333 9.02224 14.3333 7.29167C14.3333 3.40266 11.1807 0.25 7.29167 0.25C3.40266 0.25 0.25 3.40266 0.25 7.29167C0.25 11.1807 3.40266 14.3333 7.29167 14.3333C9.02224 14.3333 10.607 13.7091 11.8331 12.6734L11.625 13.8698L15.6949 17.9397L17.9397 15.6949L13.8698 11.625L12.6734 11.8331ZM7.29167 12.7083C10.2832 12.7083 12.7083 10.2832 12.7083 7.29167C12.7083 4.30015 10.2832 1.875 7.29167 1.875C4.30015 1.875 1.875 4.30015 1.875 7.29167C1.875 10.2832 4.30015 12.7083 7.29167 12.7083Z"/><path d="M16.4609 18.7057L18.7057 16.4609L19.4401 17.1953C19.8533 17.6086 19.8533 18.2786 19.4401 18.6918L18.6918 19.4401C18.2786 19.8533 17.6086 19.8533 17.1953 19.4401L16.4609 18.7057Z"/></g><defs><clipPath id="clip0_424_48"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                            <span>LEARN MORE</span>
                        </button> 
                    </div>
                </div>

                {xpCard && (
                    <div className={[styles.overlay, styles.active].join(' ')}>
                        <div className={styles['expended-card']}>
                            <section className={styles.info}>
                                <div className={styles['company-info']}>
                                    <h2>{xpCard['full-title']}</h2>
                                    <small>{xpCard.duration}</small>
                                </div>
                                <img src={xpCard.src} alt={xpCard.alt}/>
                                <div className={styles.role}>Role: {xpCard.position}</div>
                            </section>
                            <section className={styles.overview}>
                                <h2>Overview</h2>
                                <p>{xpCard.overview}</p>
                            </section>
                            <section className={styles.responsibilities}>
                                <h2>Core Responsibilities</h2>
                                <ul dangerouslySetInnerHTML={{ __html: xpCard.responsibilities }} />
                            </section>
                            <section className={styles.achievements}>
                                <h2>Key Achievements</h2>
                                <p dangerouslySetInnerHTML={{ __html: xpCard.achievements }} />
                            </section>
                            <button onClick={() => openXpCard(null)}>Back</button>
                        </div>
                    </div>
                )}
            </main>
            <Footer quote='Bring Your Idea to Life'/>
        </>
    );
}

export default Experience