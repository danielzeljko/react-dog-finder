import { v4 as uuid } from "uuid";

/** Render list of dogs
 *
 * Props
 * - dogs
 *
 * Routes -> DogList
 */
function DogList({ dogs }) {
  return (
    <>
      {dogs.map((d) => (
        <div key={uuid()}>
          <p>{d.name}</p>
          <img src={`/${d.src}.jpg`} alt={`${d.name}`} />
        </div>
      ))}
    </>
  );
}

export default DogList;
