import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import NavItems from '../NavItems/NavItems';

export default function NavBar({ setUser }) {
  //state and click handler for showing nav items
  const [showItems, setShowItems] = useState(-1);
  const handleBurgerClick = () => setShowItems(showItems * -1)
  function handleLogoClick () {
    if (showItems > 0) {
      setShowItems(showItems * -1);
    } 
  }
  

  return (
    <>
      <nav className="NavBar">
        <Link to="/home" className="Logo" onClick={handleLogoClick}>Logo</Link>
        <div className="container" onClick={handleBurgerClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
      { showItems > 0 ? <NavItems setUser={setUser} showItems={showItems} setShowItems={setShowItems} /> : null }
    </>
  );
}