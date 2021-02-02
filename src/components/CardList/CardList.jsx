import './CardList.css';
import AddCard from '../AddCard/AddCard';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as catsAPI from '../../utilities/cats-api';
import * as decksAPI from '../../utilities/decks-api';
import * as cardsAPI from '../../utilities/cards-api';

export default function CardList({ activeCard, setActiveCard, cards, setCards, activeDeck, setActiveDeck, user, handleAddCard, setDeck, deck }) {
    const history = useHistory();

    const [showAddCard, setShowAddCard] = useState(-1);
    const handleAddCardClick = () => setShowAddCard(showAddCard * -1);
    
    const cardList = cards.map(card =>
        <p
          key={card._id}
          onClick={() => setActiveCard(card)}
        >
          <Link className="CardLink" to="/edit">{card.question}</Link>
          
        </p>
    );

    async function handleDeleteDeck() {
        await decksAPI.deleteDeck(activeDeck);
        await cardsAPI.deleteChildCards(activeDeck);
        const decks = await decksAPI.getAll();
        const cards = await cardsAPI.getAll();
        setDeck(decks);
        setCards(cards);
        setActiveDeck('');
        history.push('/decks');
    }

    return (
        <main className="CardList">
            <h2>{activeDeck.name} Cards</h2>
            <div>
                {cardList}
            </div>
            <div>
            { activeDeck !== "" ? <button onClick={handleAddCardClick}>+</button> : null}
            
            { showAddCard > 0 ? <AddCard cards={cards} setCards={setCards} activeDeck={activeDeck} user={user} activeDeck={activeDeck} handleAddCard={handleAddCard} showAddCard={showAddCard} setShowAddCard={setShowAddCard}/> : null }
            { activeDeck !== "" ? <button onClick={handleDeleteDeck}>Delete {activeDeck.name}</button> : null}
            </div>
        </main>

    )
}