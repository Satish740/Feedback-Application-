import {createContext,useState,useEffect} from 'react'
//import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const  FeedbackProvider = ({children}) =>{
    const[feedback,setFeedback] =useState([])
    const[isLoading,setIsLoading]=useState(true)


    const updateFeedback=async (id,updItem)=>{

      const response= await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(updItem)
      })
      const data= await response.json()
      
      setFeedback(feedback.map((item)=>(item.id===id?{...item,...data}:item)))
      setFeedbackEdit({
        item:{},
        edit:false
      })

    }

    /*
     const updateFeedback=async (id,updItem)=>{

      var response= await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(updItem)
      })
      var data= await response.json()

      response= await fetch('/feedback?_sort=id')
      data= await response.json()
      setFeedback(data)
      setFeedbackEdit({
        item:{},
        edit:false
      })

    }
    
    */




    const[feedbackEdit,setFeedbackEdit]=useState({
      item:{},
      edit:false
    })

    useEffect(()=>{
      fetchFeedback()
    },[])
          
    const fetchFeedback= async()=>{
      const response= await fetch('/feedback?_sort=id')
      const data= await response.json()
      setFeedback(data)
      setIsLoading(false)
    }

  const addFeedback = async(newFeedback) => {
    const response= await fetch('/feedback',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(newFeedback)
    })
    const data = await response.json()
   //  newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
  };

    const handleDelete = async(id) => {
        if (window.confirm("Are you sure?")) {
          await fetch(`/feedback/${id}`,{
            method:'DELETE'
          })
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

      const editFeedback=(item)=>{
        setFeedbackEdit({
          item,
          edit:true
        })
      }

    return <FeedbackContext.Provider value={{feedback,handleDelete,addFeedback,editFeedback,feedbackEdit,updateFeedback,isLoading}}>
        {children}
    </FeedbackContext.Provider>


}

export default FeedbackContext