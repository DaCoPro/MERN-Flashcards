
import './DecksPage.css';
import DeckList from '../../components/DeckList/DeckList';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import CardList from '../../components/CardList/CardList';
import * as decksAPI from '../../utilities/decks-api';
import * as catsAPI from '../../utilities/cats-api';
import { useState, useEffect, useRef } from 'react';

export default function DecksPage({ deck, setDeck }) {
    const [cats, setCats] = useState([]);
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
                <CategoriesList cats={cats} setCats={setCats} />
            </div>
            <div>
                <DeckList deck={deck} setDeck={setDeck}/>
            </div>
            <div>
                <CardList />
            </div>
        </main>
    );
}