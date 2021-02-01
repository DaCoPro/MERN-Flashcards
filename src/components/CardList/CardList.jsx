import './CardList';
import AddCard from '../AddCard/AddCard';
import { useState, useEffect } from 'react';
import * as catsAPI from '../../utilities/cats-api';
import * as decksAPI from '../../utilities/decks-api';

export default function CardList({ activeCard, setActiveCard, cards, setCards, activeDeck, user, handleAddCard, setDeck }) {
    
    const [showAddCard, setShowAddCard] = useState(-1);
    const handleAddCardClick = () => setShowAddCard(showAddCard * -1);
    
    const cardList = cards.map(card =>
        <li
          key={card._id}
          onClick={() => setActiveCard(card)}
        >
          {card.question}
          
        </li>
    );

    async function handleDeleteDeck() {
        await decksAPI.deleteDeck(activeDeck);
        const cards = await decksAPI.getAll();
        setCards(cards);
    }

    return (
        <main>
            <h2>{activeDeck.name} Cards:</h2>
            <div>
                {cardList}
            </div>
            <div>
            { activeDeck !== "" ? <button onClick={handleAddCardClick}></button> : null}
            
            { showAddCard > 0 ? <AddCard cards={cards} setCards={setCards} activeDeck={activeDeck} user={user} activeDeck={activeDeck} handleAddCard={handleAddCard} setShowAddCard={setShowAddCard}/> : null }
            { activeDeck !== "" ? <button onClick={handleDeleteDeck}></button> : null}
            </div>
        </main>

    )
}