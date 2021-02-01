import './DeckList.css';
import * as catsAPI from '../../utilities/cats-api';
import { useState, useEffect } from 'react';
import AddDeck from '../AddDeck/AddDeck';

export default function DeckList({ setActiveDeck, deck, setDeck, user, handleAddDeck, activeCat, setCats }) {
    const [showAddDeck, setShowAddDeck] = useState(-1);
    const handleAddDeckClick = () => setShowAddDeck(showAddDeck * -1)

    async function handleDeleteCat() {
        await catsAPI.deleteCat(activeCat);
        const cats = await catsAPI.getAll();
        setCats(cats);
    }

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
            <h2>{activeCat.name} Decks:</h2>
            <div>
                {decks} 
            </div>
            <div>
                { activeCat !== "" ? <button onClick={handleAddDeckClick}></button> : null}
            
            { showAddDeck > 0 ? <AddDeck user={user} showAddDeck={showAddDeck} setShowAddDeck={setShowAddDeck} activeCat={activeCat} handleAddDeck={handleAddDeck} /> : null }
                { activeCat !== "" ? <button onClick={handleDeleteCat}></button>  : null }
            </div>
        </main>
    )
}