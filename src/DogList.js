import axios from "axios";
import { useState } from "react";

function DogList({ dogs }) {
  return (
    <div>
      <div>
        {dogs.map(d => (
          <div key={d.name}>
            <p>{d.name}</p>
            <img src={d.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;