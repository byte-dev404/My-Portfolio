// Hero.jsx
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

function Hero() {
  const bgRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  const BG_WIDTH = 1742;
  const BG_HEIGHT = 980;
  const SPHERE_CX = 1220;
  const SPHERE_CY = 495;
  const SPHERE_DIAMETER = 550;

  useEffect(() => {
    if (!bgRef.current || !logoRef.current || !containerRef.current) return;

    const compute = () => {
      const logoRect = logoRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const logoDiameter = Math.min(logoRect.width, logoRect.height);
      const scale = logoDiameter / SPHERE_DIAMETER;
      const scaledBgWidth = BG_WIDTH * scale;
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const sphereScaledX = SPHERE_CX * scale;
      const sphereScaledY = SPHERE_CY * scale;
      const left = containerCenterX - sphereScaledX;
      const top  = containerCenterY - sphereScaledY;

      const bgEl = bgRef.current;
      bgEl.style.width = `${scaledBgWidth}px`;
      bgEl.style.height = 'auto';
      bgEl.style.transform = `translate(${left}px, ${top}px)`;
      bgEl.style.zIndex = -3;
      logoRef.current.style.zIndex = 1;
    };

    compute();
    window.addEventListener('resize', compute);
    const ro = new ResizeObserver(compute);
    ro.observe(containerRef.current);
    ro.observe(logoRef.current);

    return () => {
      window.removeEventListener('resize', compute);
      ro.disconnect();
    };
  }, []);

  return (
    <header className={styles.hero}>
      <section className={styles.introduction}>
        <h1>Hi, I'm <span className={styles.highlight}>Dev-404</span></h1>
        <h2>A Full Stack Developer</h2>
        <p>From sleek websites to secure apps and creative 3D worlds,  I turn ideas into functional, fast, and beautiful digital experience.</p>
        <button className={styles['cta-btn']}>Let's Connect</button>
      </section>

      <section className={styles['logo-container']} ref={containerRef}>
        <img ref={bgRef} src="src/assets/bg-image.jpg" alt="background-image" aria-hidden="true" className={styles.bgImage} draggable="false"/>
        <img ref={logoRef} src="src/assets/my logo.png" alt="My logo image" className={styles.logo}/>
      </section>
    </header>
  );
}

export default Hero;
