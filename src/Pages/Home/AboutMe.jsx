import React, { useState } from 'react';

export default function AboutMe() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/claire-weiqing-zhao-868b4982/",
    github: "https://github.com/Clairevitsing"
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="about--section--content--box about--section--box">
        <div className="about--section--content">
          <p className="section--title">À propos</p>
          <h1 className="skills-section--heading">À propos de moi</h1>
          <p className="about--section-description">
            Autonome, curieuse et proactive, je suis passionnée par le développement full stack, avec une spécialisation en PHP (Symfony, Laravel) ainsi qu'en React et Angular.
          </p>
          <p className="about--section-description">
            Je recherche un poste pour développer des applications web performantes et contribuer à des solutions améliorant la performance, la sécurité et l'expérience utilisateur dans un environnement innovant.
          </p>
        </div>
        <div id="socials-container" className="social-icons">
          <button className="btn btn-primary">Voir les détails 
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
          </button>
          <svg 
            className="linkedin-icon"
            data-hover={hoveredIcon === 'linkedin'}
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleSocialClick(socialLinks.linkedin)}
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 33 33"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
            />
          </svg>
          
          <svg 
            className="github-icon"
            data-hover={hoveredIcon === 'github'}
            onMouseEnter={() => setHoveredIcon('github')}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleSocialClick(socialLinks.github)}
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 256 256"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M128 0C57.308 0 0 57.307 0 128c0 56.554 36.676 104.487 87.535 121.461 6.397 1.185 8.758-2.777 8.758-6.16 0-3.051-.119-13.135-.174-23.742-35.61 7.742-43.124-15.049-43.124-15.049-5.822-14.807-14.212-18.734-14.212-18.734-11.631-7.959.88-7.801.88-7.801 12.853 0.905 19.623 13.19 19.623 13.19 11.427 19.567 29.936 13.911 37.21 10.642 1.149-8.27 4.469-13.92 8.126-17.116-28.352-3.226-58.096-14.208-58.096-63.264 0-13.965 4.995-25.349 13.218-34.246-1.329-3.214-5.729-16.217 1.241-33.782 0 0 10.771-3.435 35.253 13.154 10.217-2.836 21.16-4.255 32.025-4.305 10.864 0.05 21.812 1.47 32.051 4.305 24.447-16.589 35.199-13.154 35.199-13.154 6.98 17.565 2.594 30.568 1.264 33.782 8.246 8.897 13.203 20.271 13.203 34.246 0 49.172-29.852 59.998-58.336 63.165 4.587 3.965 8.679 11.718 8.679 23.642 0 17.084-.148 30.806-.148 35.012 0 3.407 2.307 7.399 8.804 6.15C219.396 232.397 256 184.405 256 128.001 256 57.307 198.692 0 128 0z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}