import './DeckList.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeckListItem from '../DeckListItem/DeckListItem';
import AddDeck from '../AddDeck/AddDeck';

export default function DeckList({ setActiveDeck, deck, setDeck, user, handleAddDeck, activeCat }) {
    const [showAddDeck, setShowAddDeck] = useState(-1);
    const handleAddDeckClick = () => setShowAddDeck(showAddDeck * -1)

    const decks = deck.map(deck =>
        <li
          key={deck._id}
          className={deck === activeCat ? 'active' : ''}
          onClick={() => setActiveDeck(deck)}
        >
          {deck.name}
        </li>
    );
    return (
        
        <main className="DeckList">
            <h2>Decks:</h2>
            <div>
                {decks} 
            </div>
            <div>
                { activeCat !== "" ? <button onClick={handleAddDeckClick}></button> : null}
            
            { showAddDeck > 0 ? <AddDeck user={user} showAddDeck={showAddDeck} setShowAddDeck={setShowAddDeck} activeCat={activeCat} handleAddDeck={handleAddDeck} /> : null }
            </div>
        </main>
    )
}