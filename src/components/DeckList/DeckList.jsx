import './DeckList.css';
import * as catsAPI from '../../utilities/cats-api';
import * as decksAPI from '../../utilities/decks-api';
import * as cardsAPI from '../../utilities/cards-api';
import { useState, useEffect } from 'react';
import AddDeck from '../AddDeck/AddDeck';
import { useHistory } from 'react-router-dom';

export default function DeckList({ setActiveDeck, deck, setDeck, user, handleAddDeck, activeCat, setCats, setActiveCat, setCards}) {
    const [showAddDeck, setShowAddDeck] = useState(-1);
    const handleAddDeckClick = () => setShowAddDeck(showAddDeck * -1)
    const history = useHistory();

    async function handleDeleteCat() {
        let relevantDecks = [];
        deck.forEach(function(d) {
            //push decks with deleted cat to an array
            if  (d.category === activeCat._id) {
                relevantDecks.push(d);
            }
        });
        await catsAPI.deleteCat(activeCat);
        relevantDecks.forEach( async function(deck) {
            //they'll need to be deleted , along with their cards. 
            await decksAPI.deleteDeck(deck);
            await cardsAPI.deleteChildCards(deck);
        });
        
        const cats = await catsAPI.getAll();
        const decks = await decksAPI.getAll();
        const cards = await cardsAPI.getAll();
        setCats(cats);
        setDeck(decks);
        setCards(cards);
        setActiveCat('');
        setActiveDeck('');
        history.push('/decks');

    }
    // async function handleDeleteDeck() {
    //     await decksAPI.deleteDeck(activeDeck);
    //     await cardsAPI.deleteChildCards(activeDeck);
    //     const decks = await decksAPI.getAll();
    //     const cards = await cardsAPI.getAll();
    //     setDeck(decks);
    //     setCards(cards);
    //     setActiveDeck('');
    //     history.push('/decks');
    // }

    const decks = deck.map(deck =>
        <h3
          key={deck._id}
          className={deck === activeCat ? 'active' : ''}
          onClick={() => setActiveDeck(deck)}
        >
          {deck.name}
        </h3>
    );
    return (
        
        <main className="DeckList">
            <h2>{activeCat.name} Decks</h2>
            <div>
                {decks} 
            </div>
            <div>
                { activeCat !== "" ? <button onClick={handleAddDeckClick}>+</button> : null}
            
            { showAddDeck > 0 ? <AddDeck user={user} showAddDeck={showAddDeck} setShowAddDeck={setShowAddDeck} activeCat={activeCat} handleAddDeck={handleAddDeck} /> : null }
                { activeCat !== "" ? <button className="DeleteButton" onClick={handleDeleteCat}>Delete {activeCat.name}</button>  : null }
            </div>
        </main>
    )
}