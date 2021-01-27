import './NavItems.css';
import * as userService from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default function NavItems ({ setUser, showItems, setShowItems }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
      }
    const handleItemClick = () => setShowItems(showItems * -1)
    return(
        <div className="NavItems">
            <Link to="/decks" className="Item" onClick={handleItemClick}>Decks</Link>
            <Link to="/study" className="Item" onClick={handleItemClick}>Study</Link>
            <Link to="" onClick={handleLogOut} className="Item">Log Out</Link>
        </div>
    );
}