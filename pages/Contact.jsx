import React from "react";
import { useNavigate} from 'react-router-dom';
import ButtonStyles from "../components/ButtonStyles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Contact() {
    const navigate = useNavigate(); 

    const buttonContent = [
      { label: 'Home', path: '/'},
      { label: 'Resume', path: '/Resume'},
      { label: 'Projects', path: '/Projects'},
      { label: 'Contact', path: '/Contact'},
      { label: 'Feedback', path: '/Feedback'},
  ];

  const BUTTON_STYLES = {
    background: "transparent",
    color: "#ff4fd8",
    border: "1px solid whitesmoke",
    padding: "5px 95px",
    borderRadius: "6px",
    fontSize: "16px",
    letterSpacing: "2px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    // width: "fit-content",
    textShadow: "whitesmoke",
  };

    return (

        <div>
            <div className="buttonStyles-resume">
                {buttonContent.map(({label, path}, index) => (
                <ButtonStyles onClick={() => navigate(path)} content={label} path={path} key={index} />))}        
            </div> 
            <div className="contact-page">
                <div className="contact-left">
                    <img src="/images/PNG image-D3AB4FCC421F-1.png" width='300px'></img>
                    <a id="fbook" href='https://www.facebook.com/averie.strunk.5/'><img src="/images/facebook.png" width='40px'></img></a>
                    <a href='https://www.instagram.com/averielinn?igsh=dmdnZjgxcDlua3dn&utm_source=qr'><img src="/images/insta.png" width='40px'></img></a>
                </div>
                <div className="contact-right">
                    <h1>Averie Michel</h1>
                    <a style={BUTTON_STYLES}  href="mailto:averiestrunk@gmail.com?subject=Hello&body=I%20want%20to%20connect!" >AVERIESTRUNK@GMAIL.COM</a>
                    <a style={BUTTON_STYLES}  href="sms:+15807364620?body=Hello%20there!" >5807364620</a>
                    <a style={BUTTON_STYLES}  href='https://www.linkedin.com/in/averie-michel-13a793172/' >LINKEDIN</a>
                    <a style={BUTTON_STYLES}  href='https://github.com/AverieMichel'>GITHUB</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;