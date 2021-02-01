import './CardList';
import AddCard from '../AddCard/AddCard';
import { useState, useEffect } from 'react';

export default function CardList({ activeDeck, user, handleAddCard }) {
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


    return (
        <main>
            <h2>Cards:</h2>
            <div>
                {cards}
            </div>
            <div>
            { activeDeck !== "" ? <button onClick={handleAddCardClick}></button> : null}
            
            { showAddCard > 0 ? <AddCard activeDeck={activeDeck} user={user} activeDeck={activeDeck} handleAddCard={handleAddCard} setShowAddCard={setShowAddCard}/> : null }
            </div>
        </main>

    )
}