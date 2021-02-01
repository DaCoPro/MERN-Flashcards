import { useHistory } from 'react-router-dom';
import './WelcomePage.css';

export default function WelcomePage ({ dueCards, dueDecks, user, deck }) {
    const history = useHistory();
    async function handleDeckLink() {
        history.push('/decks');
    }
    return (
        <main className="WelcomePage">
            <h1>Welcome, {user.name}!</h1>
            { deck.length ? <h2>You have {dueCards.length} cards to study, in {dueDecks.length} decks.</h2>
             : <div><h2>Looks like you don't have any decks yet, ready to make some? </h2>
            <button onClick={handleDeckLink}>Let's Get Started</button></div>}
        </main>
    );
}