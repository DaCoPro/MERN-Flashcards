import {  useEffect } from 'react';
import * as decksAPI from '../../utilities/decks-api';
import './DecksPage.css';
import DeckList from '../../components/DeckList/DeckList';

export default function DecksPage({ deck, setDeck }) {
   

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