import React from "react";

function ResumeButton() {
    const BUTTON_STYLES = {
        background: "transparent",
        color: "#ff4fd8",
        border: "1px solid #ff4fd8",
        padding: "10px 20px",
        borderRadius: "6px",
        fontSize: "16px",
        letterSpacing: "1px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        width: "fit-content",
        textShadow: "whitesmoke",
      };

    return(
        <div className="resumeButton">
            <a href="/WebDeveloper.pdf" target="_blank" rel="noopener noreferrer" style={BUTTON_STYLES}>
            View Resume</a>
            <a href="/WebDeveloper.pdf" download style={BUTTON_STYLES}>
            Download Resume</a>
      </div>
    )
}

export default ResumeButton;