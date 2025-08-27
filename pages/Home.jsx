import React from "react";
import { useNavigate} from 'react-router-dom';
import ButtonStyles from "../components/ButtonStyles";
import DiamondIcon from '@mui/icons-material/Diamond';

function Home() {
  const navigate = useNavigate(); 

  const buttonContent = [
    // { label: 'Home', path: '/'},
    { label: 'Resume', path: '/Resume'},
    { label: 'Projects', path: '/Projects'},
    { label: 'Contact', path: '/Contact'},
    { label: 'Feedback', path: '/Feedback'},
];

  return (
    // <Biography /> 
    <div className="home-container">
      <div className="title-container">
        <DiamondIcon className="icon" />
        <h1> Averie Michel</h1>
        <p>🎀  Happy you’re here—thank you for checking out my portfolio!</p>
      </div>
      <div className="buttonStyles">
      {buttonContent.map(({label, path}, index) => (
                <ButtonStyles onClick={() => navigate(path)} content={label} path={path} key={index} />
            ))}        
      </div>

    </div>

  )
}

export default Home;