import React from "react";
import Weather from '../components/Weather';
import { useNavigate} from 'react-router-dom';
import ButtonStyles from "../components/ButtonStyles";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";
import keeper from '../public/images/TheKeeperApp.exmaple.png';
import movie from '../public/images/movies.example.mov';

function Projects() {
    const navigate = useNavigate(); 

    const buttonContent = [
      { label: 'Home', path: '/'},
      { label: 'Resume', path: '/Resume'},
      { label: 'Projects', path: '/Projects'},
      { label: 'Contact', path: '/Contact'},
      { label: 'Feedback', path: '/Feedback'},
  ];

    return (
        <div style={{color: 'whitesmoke'}}>
            <div className="buttonStyles-resume">
                {buttonContent.map(({label, path}, index) => (
                <ButtonStyles onClick={() => navigate(path)} content={label} path={path} key={index} />))}        
            </div>  
            <div className="projects-container">
                <motion.h2
                initial={{ opacity: 0, rotate: 0, y: -50 }}
                animate={{ opacity: 1, rotate: 360, y: 0 }}
                transition={{ 
                    rotate: { duration: 0.6, ease: "easeInOut" },
                    y: { duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55], delay: 0.6 } 
                }}
                style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}
                >Built It, Broke It, Fixed It</motion.h2>
                <div className="projects">
                    <div id="weather" className="project">
                        <h3>Weather API:</h3>
                        <Weather />
                        <ScrollReveal>
                            <p>A real-time weather component built with React that displays current weather data based on the user's location. Upon loading, the app requests the user's geographic coordinates using the Geolocation API, then sends a request to a custom /weather endpoint to fetch live weather details from a third-party service (e.g., WeatherAPI). The component shows information like temperature, condition, humidity, wind speed, and local time in a clean, responsive UI. Built using Axios for API calls and React hooks (useState, useEffect) for state and side-effect management, this feature demonstrates my ability to work with external APIs, manage asynchronous data, and enhance user experience with live, location-based content.</p>                            
                        </ScrollReveal>
                    </div>
                    <div className="project">
                    <h3>The Keeper APP:</h3>
                        <img src={keeper} width='700px'></img>  
                        <ScrollReveal>
                            <p>A minimalist note-taking web app built with React and Material UI, inspired by digital sticky notes. Users can create, view, and organize short notes with a title and content. This was my first React project, created during a coding course to practice core front-end concepts. I implemented features such as state management, component hierarchy, data flow via props, and responsive UI design using Material UI. Built with Vite for fast and modern development tooling, this project solidified my foundation in modern front-end workflows.</p>                            
                        </ScrollReveal>                       
                    </div>
                    <div className="project">
                    <h3>Movie Blog:</h3>
                        <video src={movie} width='700px' controls></video>
                        <ScrollReveal>
                            <p>A full-stack movie search application that allows users to search for movies, view detailed information, and save favorites using data from the OMDb API. Built with Node.js, Express.js, and EJS for server-side rendering, the app handles API calls via Axios and stores user-selected favorites in a PostgreSQL database. I used body-parser to handle form data and created dynamic pages using Embedded JavaScript templates (EJS). This project enhanced my skills in working with RESTful APIs, backend routing, and persistent data storage with SQL.</p>                            
                        </ScrollReveal>
                    </div>
                </div>   
            </div>  
        </div>

    )
}

export default Projects;