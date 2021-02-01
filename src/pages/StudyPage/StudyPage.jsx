import './StudyPage.css';

export default function StudyPage ({ cards, dueCards, dueDecks, setActiveDeck }) {
    const decks = dueDecks.map(deck =>
        <h3
          key={deck}
          onClick={() => setActiveDeck(deck)}
        >
          {deck}
        </h3>
    );
    return (
        <main className="StudyPage">
            { dueDecks.length ? <h1>Here's what you should study:</h1> : <h1>You're all done for today!</h1>}
            {decks}
        </main>
    )
}