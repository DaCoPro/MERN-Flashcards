import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/home">Welcome</Link>
      &nbsp; | &nbsp;
      <Link to="/decks">Decks</Link>
      &nbsp; | &nbsp;
      <Link to="/study">Study</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}