import './CardList';
import AddCard from '../AddCard/AddCard';
import { useState, useEffect } from 'react';
import * as catsAPI from '../../utilities/cats-api';
import * as decksAPI from '../../utilities/decks-api';

export default function CardList({ activeDeck, user, handleAddCard, setDeck }) {
    const [showAddCard, setShowAddCard] = useState(-1);
    const handleAddCardClick = () => setShowAddCard(showAddCard * -1)
  
    let cards = [];
    if (activeDeck) {

        const cardsArray = activeDeck.cards;
        cards = cardsArray.map(card =>
            <li
            key={card._id}
            
            >
            {card.question}
            </li>
        );
        
    }

    async function handleDeleteDeck() {
        await decksAPI.deleteDeck(activeDeck);
        const decks = await decksAPI.getAll();
        setDeck(decks);
    }

    return (
        <main>
            <h2>{activeDeck.name} Cards:</h2>
            <div>
                {cards}
            </div>
            <div>
            { activeDeck !== "" ? <button onClick={handleAddCardClick}></button> : null}
            
            { showAddCard > 0 ? <AddCard activeDeck={activeDeck} user={user} activeDeck={activeDeck} handleAddCard={handleAddCard} setShowAddCard={setShowAddCard}/> : null }
            { activeDeck !== "" ? <button onClick={handleDeleteDeck}></button> : null}
            </div>
        </main>

    )
}