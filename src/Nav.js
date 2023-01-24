import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Render Nav bar
 *
 * Props
 * - dogs
 *
 * App -> Nav
 */

function Nav({ dogs }) {
  return (
    <nav className="NavBar">
      {dogs.map(dog => <NavLink key={uuid()} to={`/dogs/${dog.name.toLowerCase()}`}>
        {dog.name}</NavLink>)}
    </nav>
  );
}

export default Nav;
