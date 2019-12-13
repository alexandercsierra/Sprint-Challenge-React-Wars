import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Cards from "./components/Cards"
import Pages from "./components/Pages"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  const [charArr, setCharArr] = useState();
  const [page, setPage] = useState(1);

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?&page=${page}`)
      .then(res => {
        console.log(res);
        setCharArr(res.data.results);
      })
      .catch(err => console.log(err))

  }, [page]);



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        <Cards charArr = {charArr}/>
      </div>
      <div style ={{display: "flex", justifyContent: "center"}}>
        <Pages setPage={setPage}/>
      </div>
      
    </div>

  );
}

export default App;
