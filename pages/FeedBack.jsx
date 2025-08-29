import React, {useEffect , useState} from "react";
import { useNavigate} from 'react-router-dom';
import ButtonStyles from "../components/ButtonStyles";
import Form from "../components/Form";
import ScrollReveal from "../components/ScrollReveal";

function Feedback() {
    const navigate = useNavigate(); 
    const [reviews, setReviews] = useState([]);


    const buttonContent = [
      { label: 'Home', path: '/'},
      { label: 'Resume', path: '/Resume'},
      { label: 'Projects', path: '/Projects'},
      { label: 'Contact', path: '/Contact'},
      { label: 'Feedback', path: '/Feedback'},
  ];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://my-port-back-3cd7b6fcf498.herokuapp.com/reviews');
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.log('Failed to fetch reviews');
        }
      } catch (err) {
        console.log('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, []);

    return (

        <div style={{color: 'whitesmoke'}}>
            <div className="buttonStyles-resume">
                {buttonContent.map(({label, path}, index) => (
                <ButtonStyles onClick={() => navigate(path)} content={label} path={path} key={index} />))}        
            </div>  
            <div className="filler">
              <h3>Your feedback helps improve the experience. Let me know what you liked or what could be better!</h3>
              <ul className="review-tips">
                <li>What did you enjoy the most?</li>
                <li>Was anything confusing?</li>
                <li>How can this page be more helpful?</li>
              </ul>
            </div>
            <Form />
            
            <ul className="reviews">
              {reviews.length === 0 ? (
                <p>No reviews yet!</p>
                ) : (
                reviews.map((rev) => (
                <ScrollReveal key={rev.id} className="review">
                  <li key={rev.id} style={{ margin: '10px', padding: '10px' }}>
                    <h4>{rev.name}</h4>
                    <p>{rev.review}</p>
                  <small>{new Date(rev.created_at).toLocaleString()}</small>
                  </li>
                </ScrollReveal>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Feedback;
