import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

/** Filters dogs array for single dog obj
 *
 * Props
 * - dogs
 *
 * Routes -> DogFilter -> DogDetails
 */
function DogFilter({ dogs }) {
  const { name } = useParams();
  console.log("dogfiltername", name)

  const dog = dogs.filter((dog) => dog.name.toLowerCase() === name)[0];

  console.log("dogfilter", dog)
  return (
    <DogDetails dog={dog}/>
  );
}

export default DogFilter;
