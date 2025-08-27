import React, {useState} from "react";
import ButtonStyles from "./ButtonStyles";
import { useNavigate } from "react-router-dom"; 

function Header () {
    const navigate = useNavigate(); 
    const buttonContent = [
        { label: 'Home', path: '/'},
        { label: 'Resume', path: '/Resume'},
        { label: 'Projects', path: '/Projects'},
        { label: 'Contact', path: '/Contact'},
        { label: 'Feedback', path: '/Feedback'},
    ];
    return (
        <header>
            <h1>Averie Michel</h1>
            <div className="buttonContainer">
            {buttonContent.map(({label, path}, index) => (
                <ButtonStyles onClick={() => navigate(path)} content={label} path={path} key={index} />
            ))}
            </div>


        </header>
    )
}

export default Header;

