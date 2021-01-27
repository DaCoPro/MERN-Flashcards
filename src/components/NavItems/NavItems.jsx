import { Link } from 'react-router-dom';

export default function NavItems () {
    return(
        <>
            <Link to="/decks">Decks</Link>
            <Link to="/study">Study</Link>
        </>
    );
}