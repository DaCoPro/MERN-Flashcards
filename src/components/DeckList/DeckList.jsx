import './DeckList.css';
import DeckListItem from '../DeckListItem/DeckListItem';

export default function DeckList({ deck, setDeck }) {
    const showDecks = deck.map(item => 
        <DeckListItem key={item._id} route={item} />
    );
    return (
        <div>
           {showDecks} 
        </div>
    )
}