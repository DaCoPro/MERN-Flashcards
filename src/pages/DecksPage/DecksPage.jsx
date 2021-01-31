
import './DecksPage.css';
import DeckList from '../../components/DeckList/DeckList';
import * as decksAPI from '../../utilities/decks-api';
import { useEffect, useRef } from 'react';

export default function DecksPage({ deck, setDeck }) {

    const categoriesRef = useRef([]);

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