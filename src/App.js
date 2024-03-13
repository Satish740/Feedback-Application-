import { v4 as uuidv4 } from "uuid";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedBackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

/*
const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // useEffect is used for side effects in functional components
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array ensures the effect runs only when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

*/

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackProvider>

    <Router>
      {/*  <Header text='Feedback'/> */}

      {/*  <Header bgColor='blue' textColor='red'/>*/}
      <Header />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedbackStats />
                <FeedbackList
                  deleteFeedback={handleDelete}
                />
                <AboutIconLink/>
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post/>} />
       {/*   <Route path="/post/:id/:name" element={<Post/>} /> */}
        </Routes>
        
      </div>
    </Router>
   </FeedbackProvider>
  );
}
export default App;

/*
function App (){
const title='Blog Post'
const body ='This is my blog post'

const comments = [
    {id:1,text:"Comment one"},
    {id:2,text:"Comment Two"}
]


    return (
    <div className='container'>
    <h1>{title.toUpperCase()}  </h1>
    <p> {body} </p>
    <ul>  
        {comments.map((il,index)=>
         <li key={index}>{index} {il.text}</li>
        )}
    </ul>
       

    </div >
    )
}
*/
//export default App
