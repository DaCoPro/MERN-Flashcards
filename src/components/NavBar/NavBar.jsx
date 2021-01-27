import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import NavItems from '../NavItems/NavItems';

export default function NavBar({ user, setUser }) {
  const [showItems, setShowItems] = useState(-1);
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  function handleBurgerClick() {
    return setShowItems(showItems * -1);
  } 
  // const handleBurgerClick = () => setShowItems(true)
  return (
    <>
      <nav className="NavBar">
        <Link to="/home">Welcome</Link>
        <div className="container" onClick={handleBurgerClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
      { showItems > 0 ? <NavItems /> : null }
    </>

  );
}