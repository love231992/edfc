import React from 'react';
import './App.css';
import pic from "./sunwithtrack.jpg"
import axios from 'axios';


function App() {
  const getPosts = () => {
    axios.get('https://cors-anywhere.herokuapp.com/http://ballast-data.herokuapp.com/')
         .then((posts) => setPosts(posts.data))
         .catch((error) => console.log(error));
  };
  
  const [posts, setPosts] = React.useState([]);
  console.log((posts))
  return (
    <div className="App">
      <img src={pic} alt="train"></img>
      <h1 className="heading">EDFC CP-303</h1>
      <div className="btn" onClick={ () => getPosts()}>Press Me</div>
      <div className="data">
        <li>{posts[0]}</li>
        <li>{posts[1]}</li>
        <li>{posts[2]}</li>
        <li>{posts[3]}</li>
        <li>{posts[4]}</li>
        <li>{posts[5]}</li>
      </div>
     
    </div>
  );
}

export default App;
