import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";

import DogList from "./DogList";
import { useState } from "react";
import axios from "axios";
import DogFilter from "./DogFilter";

const BASE_URL = "http://localhost:5001/dogs";

/** Render site application
 *
 * State
 * - dogList - array of dog obj
 * - isLoading - boolean
 *
 * App -> Nav/Routes
 */
function App() {
  // consolidate states to 1 obj
  const [dogList, setDogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** makes AJAX request to fetch dog data,
    sets dogList and isLoading */
  async function fetchDogs() {
    const resp = await axios.get(BASE_URL);
    setDogList(resp.data);
    setIsLoading(false);
  }

  if (isLoading) {
    fetchDogs();
    return <h1>Is Loading ...</h1>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogList}/>
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogList} />}/>
          <Route path="/dogs/:name" element={<DogFilter dogs={dogList} />}/>
          <Route path="*" element={<Navigate to="/dogs" />}/>
        </Routes>
      </BrowserRouter>
      <h1>Good luck!</h1>
    </div>
  );
}

export default App;
