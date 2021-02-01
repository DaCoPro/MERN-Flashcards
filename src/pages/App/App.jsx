import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as decksAPI from '../../utilities/decks-api';
import * as catsAPI from '../../utilities/cats-api';
import * as cardsAPI from '../../utilities/cards-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import EditCardPage from '../EditCardPage/EditCardPage';
import DecksPage from '../DecksPage/DecksPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import StudyPage from '../StudyPage/StudyPage';

export default function App() {
  //Set State
  const [user, setUser] = useState(getUser());
  const [deck, setDeck] = useState([]);
  const [cats, setCats] = useState([]);
  const [cards, setCards] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [activeDeck, setActiveDeck] = useState('');
  const [activeCard, setActiveCard] = useState("");
  
  useEffect(function() {
    async function getDecks() {
      if (user) {
        const decks = await decksAPI.getAll();
        setDeck(decks);
      }
    }
    getDecks();
  }, [user]);
  
  useEffect(function() {
    async function getCards() {
      if (user) {
        const cards = await cardsAPI.getAll();
        setCards(cards);
      }
    }
    getCards();
  }, [user]);


  async function handleAddDeck (newDeckData) {
    const newDeck = await decksAPI.createDeck(newDeckData);
    setDeck([...deck, newDeck])
  }

  async function handleAddCat (newCatData) {
    const newCat = await catsAPI.createCat(newCatData);
    setCats([...cats, newCat])
  }
  
  async function handleAddCard (newCardData) {
    const newCard = await cardsAPI.createCard(newCardData);
    setCards([...cards, newCard])
  }

  return (
    <main className="App">
      { user ? 
          <>
            <NavBar  user={user} setUser={setUser} />
            <Switch>
              <Route path="/home">
                <WelcomePage user={user}/>
              </Route>
              <Route path="/decks">
                <DecksPage 
                  deck={deck} 
                  setDeck={setDeck} 
                  cats={cats} 
                  setCats={setCats}
                  activeCat={activeCat}
                  setActiveCat={setActiveCat}
                  user={user}
                  handleAddCat={handleAddCat}
                  handleAddDeck={handleAddDeck}
                  activeDeck={activeDeck}
                  setActiveDeck={setActiveDeck}
                  handleAddCard={handleAddCard}
                  cards={cards}
                  setCards={setCards}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </Route>
              <Route path="/study">
                <StudyPage />
              </Route>
              <Route path="/edit">
                <EditCardPage />
              </Route>
              
              <Redirect to="/home" user={user}/>
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

