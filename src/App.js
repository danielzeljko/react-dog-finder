import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';

import DogList from './DogList';
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5001/dogs";


function App() {

  const [dogList, setDogList] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  async function fetchDogs() {
      const resp = await axios.get(BASE_URL);
      setDogList(resp.data);
  }

  function loadDogs(){
    if(!isLoading){
      fetchDogs()
      setIsLoading(true)
    }
  }

  // TODO: Do we need to execute loadDogs on our onLoad?

  return (
    <div className="App" onLoad={loadDogs()}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogList} />}></Route>
        </Routes>
      </BrowserRouter>

      <h1>Good luck!</h1>
    </div>
  );

}

export default App;
