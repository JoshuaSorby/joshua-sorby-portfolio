import React from "react";
import restaurant from "../images/restaurantImg.jpg";
import pomodoro from "../images/Pomodoro.jpg";
import flashCards from "../images/flashCards.png";
import github from "../images/github.jpg";
import linkedIn from "../images/linkedin.jpg";
import gmail from "../images/gmailicon.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal"

function Test() {

    return <div>
        <nav>
            <a href="#Projects"><h2>Projects</h2></a>
            <a href="#Skills"><h2>Skills</h2></a>
            <a href="#Contact"><h2>Contact</h2></a>
        </nav>
        <div className="body">

            

            <h2 id="Projects">Projects</h2>
            <hr/>
            <Fade triggerOnce fraction=".4" duration="500">
                <h3>Restaurant Reservation Application</h3>
            
                <section className="Article">
                    <div className="subSec">
                        <a href="https://warm-journey-81167.herokuapp.com/" target="_blank" rel="noreferrer"><img src={restaurant} alt="Dashboard from the app"/></a>
                    </div>

                    <div className="subSec">
                        <h4>Technologies Used</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>Cors</li>
                        </ul>
                    </div>
                    <div className="subSec">
                        <h4>Description</h4>
                        <p>
                            This was the final project for my coding bootcamp. It's a generic reservation application where a user can created
                            tables and reservations; then, the user can assign the reservations to the created tables. The application is hosted
                            on Heroku and uses ElephantSQL for the database.
                        </p>
                    </div>
                    
                    
                </section>
            </Fade>

            <Fade triggerOnce fraction=".4" duration="500">
            <h3>Podomoro Timer</h3>
            <section className="Article">
                <div className="subSec">
                    <a href="https://warm-journey-81167.herokuapp.com/" target="_blank" rel="noreferrer"><img src={pomodoro} alt="Dashboard from the app"/></a>
                </div>

                <div className="subSec">
                    <h4>Technologies Used</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Cors</li>
                    </ul>
                </div>
                <div className="subSec">
                    <h4>Description</h4>
                    <p>
                        This was the final project for my coding bootcamp. It's a generic reservation application where a user can created
                        tables and reservations; then, the user can assign the reservations to the created tables. The application is hosted
                        on Heroku and uses ElephantSQL for the database.
                    </p>
                </div>
                
                
            </section>
            </Fade>

            <Fade triggerOnce fraction=".4" duration="500">
            <h3>Flash Cards Application</h3>
            <section className="Article">
                <div className="subSec">
                    <a href="https://warm-journey-81167.herokuapp.com/" target="_blank" rel="noreferrer"><img src={flashCards} alt="Dashboard from the app"/></a>
                </div>

                <div className="subSec">
                    <h4>Technologies Used</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Cors</li>
                    </ul>
                </div>
                <div className="subSec">
                    <h4>Description</h4>
                    <p>
                        This was the final project for my coding bootcamp. It's a generic reservation application where a user can created
                        tables and reservations; then, the user can assign the reservations to the created tables. The application is hosted
                        on Heroku and uses ElephantSQL for the database.
                    </p>
                </div>
                
                
            </section>
            </Fade>

            <h2 id="Skills">Skills</h2>
            <hr/>

            <p>Some of the technologies I've used and skills I've learned include: </p>

            <ul className="skillList">
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Visual Studio Code</li>
                <li>REST</li>
                <li>Node.js</li>
                <li>Full stack Development</li>
                <li>Back end Development</li>
                <li>Front end Development</li>
                <li>HTML and CSS</li>
                <li>Responsive Web Design</li>
                <li>Github</li>
                <li>Git</li>
                <li>Figma</li>
                <li>Software Development</li>
                <li>JSON</li>
                <li>PowerShell</li>
                <li>TypeScript</li>
                <li>Analysis Skills</li>
                <li>SQL</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Test-driven Development</li>
                <li>Debugging</li>
                <li>Software Deployment</li>
                <li>Good Communication</li>
            </ul>

            <h2 id="Contact">Contact</h2>
            <hr/>

        <div className="Article">
            <div className="subSec">
                <a href="https://github.com/JoshuaSorby" target="_blank" rel="noreferrer"><img className="icon" src={github} alt="Github icon"/></a>
            </div>
            <div className="subSec">
                <a href="https://www.linkedin.com/in/joshua-sorby/" target="_blank" rel="noreferrer"><img className="icon" src={linkedIn} alt="Linkedin icon"/></a>
            </div>
            <div className="subSec">
                <Link to="/email"><img className="icon" src={gmail} alt="Gmail icon"/></Link>
            </div>
        </div>

        </div>
    </div>
}

export default Test;