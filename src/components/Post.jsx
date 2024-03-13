import { Navigate,useNavigate,Route,Routes } from "react-router-dom"

import React from 'react'
// import {useParams} from 'react-router-dom'
function Post() {
  //  const params=useParams()
  const navigate=useNavigate()
  const status=200
  if(status===404)
        {
            return<Navigate to='/notfound'/>
        }
  const onClick=()=>{
    navigate('/about')
  }
  return (
    <div>


   {/* <div>
      <h1>{params.id}</h1>
      <h2>{params.name}</h2>
  </div> */}

  <h1>Post</h1>
  <button onClick={onClick}>Click Here</button>
    <Routes>
        <Route path='/show' element={<h1>Hello World</h1> }/>
    </Routes>
    
    </div>


  )
}

export default Post