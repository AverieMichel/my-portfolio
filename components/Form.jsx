import React , {useState} from "react";
import logo from '/images/freepik__background__32899.png';

function Form () {
    const inputStyles = {
        background: "transparent",
        color: "whitesmoke",
        border: "1px solid whitesmoke",
        padding: "5px 5px",
        borderRadius: "6px",
        fontSize: "16px",
        letterSpacing: "2px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textShadow: "whitesmoke",
    }
    const popupStyles = {
        overlay: {
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999
        },
        popup: {
          background: '#8b5f85',
          padding: '1.5rem 2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          textAlign: 'center',
          maxWidth: '90%',
          width: '400px'
        }
      };

    const err = 404;
    const [showDeleteNotice, setDeleteNotice] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        review: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/reviews',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('review submitted!');
                setFormData({ name: '' , email: '', review: '' })
                setDeleteNotice(true);
            } else {
                console.log('something went wrong');
            } 
        } catch (err) {
            console.log('Error');
        }
    }

    return (
        <div className="form-container">
            <img src={logo} width='400px'></img>
            <form className="form" onSubmit={handleSubmit}>
                <h3>Share your opinion with me!</h3>
                {/* <h4 >name:</h4> */}
                <input 
                    placeholder="NAME:"
                    className="input" 
                    onChange={handleChange} 
                    style={inputStyles} 
                    value={formData.name}
                    type="text" 
                    name="name"/>
                {/* <h4>email:</h4> */}
                <input 
                    placeholder="EMAIL:"
                    className="input" 
                    onChange={handleChange} 
                    style={inputStyles}  
                    value={formData.email}
                    type="text" 
                    name="email" />
                {/* <h4>write a review!</h4> */}
                <textarea 
                    placeholder="WRITE A REVIEW!"
                    className="leave-review" 
                    onChange={handleChange} 
                    style={inputStyles} 
                    value={formData.review}
                    name="review"/>
                <button 
                    style={inputStyles} 
                    type="submit">Submit
                </button>
                {showDeleteNotice && (
                <div style={popupStyles.overlay}>
                <div style={popupStyles.popup}>
                    <p>Your review has been submitted!<br />
                        If you'd like it removed, please <a href="mailto:averiestrunk@email.com">contact me</a>.</p>
                    <button onClick={() => setDeleteNotice(false)}>Close</button>
                </div>
                </div>
                    )}
            </form>        
        </div>

    )
}

export default Form;
