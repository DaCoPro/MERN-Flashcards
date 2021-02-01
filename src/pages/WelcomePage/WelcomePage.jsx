import './WelcomePage.css';

export default function WelcomePage ({ dueCards, dueDecks, user }) {

    return (
        <main className="WelcomePage">
            <h1>Welcome, {user.name}!</h1>
            <h2>You have {dueCards.length} cards to study, in {dueDecks.length} decks.</h2>
        </main>
    );
}