import './DeckList.css';
import { Link } from 'react-router-dom';
import DeckListItem from '../DeckListItem/DeckListItem';

export default function DeckList({ deck, setDeck }) {
    const showDecks = deck.map(item => 
        <DeckListItem key={item._id} deck={item} />
    );
    return (
        
        <main className="DeckList">
            <h2>Decks:</h2>
            <div>
                {showDecks} 
            </div>
            <div>
                <Link to="/createdeck">+</Link>
            </div>
        </main>
    )
}