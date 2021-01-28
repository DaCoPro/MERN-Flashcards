import './DeckList.css';

export default function DeckList({ deck, setDeck }) {
    return (
        <div>
            <h1>Deck List</h1>
            <h2>{deck.name}</h2>
        </div>
    )
}