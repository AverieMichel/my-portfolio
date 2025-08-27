import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

function ButtonStyles (props) {
    const [isMousedOver, setMousedOver] = useState(false);
    function handleButtonColor(){
        setMousedOver(true);
    }

    return (
        <div >
            <button onClick={props.onClick} style={{backgroundColor: isMousedOver ? '#A35C7A' : '#FBF5E5' }} onMouseOut={()=>{setMousedOver(false)}} onMouseOver={handleButtonColor}>{props.content}</button>  
        </div>
   
    )
}


export default ButtonStyles;