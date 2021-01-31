
import './DecksPage.css';
import DeckList from '../../components/DeckList/DeckList';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import CardList from '../../components/CardList/CardList';
import * as decksAPI from '../../utilities/decks-api';
import * as catsAPI from '../../utilities/cats-api';
import { useState, useEffect, useRef } from 'react';

export default function DecksPage({ activeDeck, setActiveDeck, handleAddDeck, user, deck, setDeck, cats, setCats, handleAddCat, activeCat, setActiveCat}) {
    
    
    const categoriesRef = useRef([]);

    useEffect(function() {
        async function getCats() {
          const cats = await catsAPI.getAll();
          setCats(cats);
        }
        getCats();
    }, []);
    
    


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
                    user={user} deck={deck.filter(item => item.category === activeCat)} 
                    activeCat={activeCat} 
                    activeDeck={activeDeck}
                    setActiveDeck={setActiveDeck}
                />
            </div>
            <div>
                <CardList  
                    
                    activeDeck={activeDeck}  
                />
            </div>
        </main>
    );
}
