import './NavItems.css';
import * as userService from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default function NavItems ({ setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
      }
    return(
        <div className="NavItems">
            <Link to="/decks" className="Item">Decks</Link>
            <Link to="/study" className="Item">Study</Link>
            <Link to="" onClick={handleLogOut} className="Item">Log Out</Link>
        </div>
    );
}