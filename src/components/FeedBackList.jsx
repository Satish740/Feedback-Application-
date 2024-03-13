import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import React from "react";
import Feedbackitems from "./Feedbackitems";
//import PropTypes from "prop-types";

function FeedBackList({ deleteFeedback }) {

  const feedback=useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>;

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {/*     { feedback.map((items)=>{ return <Feedbackitems key={items.id} item={items}/> } )}   */}
        {feedback.map((items) => (
          <motion.div
            key={items.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedbackitems
              key={items.id}
              item={items}
              handleDelete={deleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  //   return (
  //     <div className='feedback-list'>
  // {/*     { feedback.map((items)=>{ return <Feedbackitems key={items.id} item={items}/> } )}   */}
  //      { feedback.map((items)=>(<Feedbackitems
  //      key={items.id}
  //      item={items}
  //      handleDelete={deleteFeedback}
  //      /> ) )}

  //      </div>
  //   )
}

// Feedbackitems.propTypes = {
//   feedback: PropTypes.array,
// };

export default FeedBackList;
