import {  useEffect } from 'react';
import * as decksAPI from '../../utilities/decks-api';
import './DecksPage.css';
import DeckList from '../../components/DeckList/DeckList';

export default function DecksPage({ deck, setDeck }) {
    //function to load all relevent decks from Atlas, on render.
    useEffect(function() {
        async function getDecks() {
          const decks = await decksAPI.getAll();
          setDeck(decks);
        }
        getDecks();
    }, []);

    return (
        <main className="DecksPage">
            <div>

            </div>
            <div>
                <DeckList deck={deck} setDeck={setDeck}/>
            </div>
            <div>

            </div>
        </main>
    );
}