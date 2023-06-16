import React from "react";
import TODO from "../../assets/fullpage-todo-app.png";
import CAL from "../../assets/calculator.png";
import RWE from "../../assets/react-weather.png";
import HAN from "../../assets/hangman-game.png";
import BIT from "../../assets/bitsandbots.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={TODO} alt="Todo app" />
          </div>
          <h3>This is my todo app</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/todo-app-petter-bakke" className="btn">Github repo</a>
            <a href="https://todo-app-chi-flax.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={CAL} alt="calculator project" />
          </div>
          <h3>This is my Calculator</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/calculator-react-petter-bakke" className="btn">Github repo</a>
            <a href="https://calculator-react-petter-bakke.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={RWE} alt="react weather project" />
          </div>
          <h3>This is my React weather app</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/react-weather-app" className="btn">Github repo</a>
            <a href="https://react-weather-app-psi-nine.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={HAN} alt="Hangman game project" />
          </div>
          <h3>This is my Hangman game</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/hangman-game" className="btn">Github repo</a>
            <a href="https://bejewelled-cat-b867f1.netlify.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={BIT} alt="Hangman game project" />
          </div>
          <h3>This is my final project exam</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/Bits-and-Bots" className="btn">Github repo</a>
            <a href="https://bits-and-bots.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;