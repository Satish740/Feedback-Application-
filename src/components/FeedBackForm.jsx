
import Card from "./shared/Card";
import { useState, useContext ,useEffect} from "react";

import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";


function FeedBackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("10");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const{addFeedback,feedbackEdit,updateFeedback }=useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEdit.edit===true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }

  },[feedbackEdit])
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (inputValue !== "" && inputValue.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 characters ");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      rating,
      text,
    };
    if(feedbackEdit.edit===true){
      updateFeedback(feedbackEdit.item.id,newFeedback)
    }
    else{
    addFeedback(newFeedback);
    }           
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select componenet */}
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write a review here"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            {" "}
            Send{" "}
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
