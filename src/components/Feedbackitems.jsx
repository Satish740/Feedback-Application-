import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card';
import PropTypes from 'prop-types';


function Feedbackitems({item, handleDelete}) {

  //const handleClick=()=>( handleDelete(item.id))
 // const [rating,setRating]=useState(item.rating)
//   const ClickEvent=()=> setRating(10);
// const ClickEvent=()=> setRating((prev)=>{return prev+1;})  
return (
    <Card >
      <div className='num-display'>{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
        <div className='text-display'> {item.text}</div>
       {/* 
       <button onClick={()=>console.log(123)} className="close">
       <button onClick={ClickEvent}>Click Here</button> */} 
    </Card>
  )
} 

Feedbackitems.propTypes={
  item:PropTypes.object.isRequired
}

export default Feedbackitems
