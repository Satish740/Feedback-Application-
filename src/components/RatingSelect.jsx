import { useState } from "react"

function RatingSelect({select}) {
    const [selected,setSelected] = useState(10)
    const handleChange=(e)=>{ 
      const newValue = +e.currentTarget.value;
      // Check if the new value is not empty or not NaN
      if (!isNaN(newValue) && newValue !== "" && newValue<=10)   {
        setSelected(newValue);
        select(newValue);
      } else {
        // If the new value is empty or NaN, set the default value (10)
        setSelected(10);
        select(10);
      }
    }
    return (
    <div>
         <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default RatingSelect
