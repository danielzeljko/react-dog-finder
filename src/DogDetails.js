import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Render details of a dog
 *
 *
 * Props
 * - dogs - obj
 *
 * Params
 * - name -- name of dog
 *
 * App -> Routes -> DogDetails
 */

function DogDetails({ dog }) {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={dog.name}></img>
      <p>{dog.age}</p>
      <ul>
        {dog.facts.map((fact) => (
          <li key={uuid()}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
