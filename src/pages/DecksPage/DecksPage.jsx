
import './DecksPage.css';
import DeckList from '../../components/DeckList/DeckList';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import CardList from '../../components/CardList/CardList';
import * as decksAPI from '../../utilities/decks-api';
import { useRef } from 'react';

export default function DecksPage({ activeCard, setActiveCard, cards, setCards, handleAddCard, activeDeck, setActiveDeck, handleAddDeck, user, deck, setDeck, cats, setCats, handleAddCat, activeCat, setActiveCat}) {

    const categoriesRef = useRef([]);

    return (
        <main className="DecksPage">
            <div>
                <CategoriesList 
                    categories={categoriesRef.current}
                    cats={cats} 
                    setCats={setCats} 
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                    user={user}
                    handleAddCat={handleAddCat}
                    setActiveDeck={setActiveDeck}
                />
            </div>
            <div>
                <DeckList 
                    handleAddDeck={handleAddDeck} 
                    user={user} 
                    deck={deck.filter(item => item.category === activeCat._id)} 
                    activeCat={activeCat} 
                    activeDeck={activeDeck}
                    setActiveDeck={setActiveDeck}
                    setCats={setCats}
                    setActiveCat={setActiveCat}
                />
            </div>
            <div>
                <CardList  
                    handleAddCard={handleAddCard}
                    activeDeck={activeDeck}
                    user={user} 
                    setDeck={setDeck} 
                    cards={cards.filter(item => item.deck === activeDeck._id)}
                    setCards={setCards}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                    deck={deck}
                    setActiveDeck={setActiveDeck}
                />
            </div>
        </main>
    );
}
