import React from 'react'
import  PropTypes  from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  let Average = 0;
  const {feedback}=useContext(FeedbackContext)
  if (feedback.length > 0) {
    Average = feedback.reduce((acc, cur) => acc + parseInt(cur.rating), 0) / feedback.length;
    Average = Average.toFixed(1).replace(/[.,]0$/, '');
  }


  return (
    <div className='feedback-stats'>
      <h4>Review : { feedback.length}</h4>
      <h4>Average : {isNaN(Average)?0:Average}</h4>
    </div>
  )
}

export default FeedbackStats


FeedbackStats.propTypes={
  FeedBackText : PropTypes.array.isRequired,}