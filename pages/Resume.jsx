import React from "react";
import Tech from '../components/Tech'
import { useNavigate} from 'react-router-dom';
import ButtonStyles from "../components/ButtonStyles";
import Experience from '../components/Experience';
import { motion } from "framer-motion";
import ResumeButton from "../components/ResumeButton";
import ScrollReveal from "../components/ScrollReveal";

function Resume() {
    const navigate = useNavigate(); 

    const buttonContent = [
      { label: 'Home', path: '/'},
      { label: 'Resume', path: '/Resume'},
      { label: 'Projects', path: '/Projects'},
      { label: 'Contact', path: '/Contact'},
      { label: 'Feedback', path: '/Feedback'},
  ];


    return (
        <div>
            <div className="buttonStyles-resume">
                {buttonContent.map(({label, path}, index) => (
                <ButtonStyles onClick={() => navigate(path)} content={label} path={path} key={index} />))}        
            </div>  
            
            <div className="bio">
                <Tech />
                <h2>Hey There, </h2>
                <img src="/images/PNG image-D3AB4FCC421F-1.png" width={200}></img>
                <p> I'm a business-minded creative transitioning from the beauty industry into tech. As a licensed cosmetologist and independent contractor, I’ve developed strong discipline, client-focused communication, and an eye for detail — qualities I now apply to software development. I’m currently completing a full-stack web development bootcamp, where I’m building the skills to grow into a role in customer support, QA, test engineering, or full-stack development. My long-term goal is to become a well-rounded developer who builds with both empathy and efficiency. 
                    <ResumeButton /> 
                </p>   
            </div>
            <div className="experience">
                <ScrollReveal> 
                    <motion.img   initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="timeline" src="/images/timeline.png" ></motion.img>
                </ScrollReveal> 
            </div>
            

                    {/* className="text-lg" */}
                    {/* <img className="timeline" src="/images/timeline.png" width='1000px'></img> */}

        </div>
    
    )
}

export default Resume;