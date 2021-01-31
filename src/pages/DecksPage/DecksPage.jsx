
import './DecksPage.css';
import DeckList from '../../components/DeckList/DeckList';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import CardList from '../../components/CardList/CardList';
import * as decksAPI from '../../utilities/decks-api';
import * as catsAPI from '../../utilities/cats-api';
import { useState, useEffect, useRef } from 'react';

export default function DecksPage({ deck, setDeck }) {
    const [cats, setCats] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);

    useEffect(function() {
        async function getCats() {
          const cats = await catsAPI.getAll();
          setCats(cats);
        }
        getCats();
        console.log(cats) 
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
                />
            </div>
            <div>
                <DeckList deck={deck.filter(item => item.category === activeCat)} />
            </div>
            <div>
                <CardList />
            </div>
        </main>
    );
}
// 