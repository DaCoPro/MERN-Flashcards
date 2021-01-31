import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as decksAPI from '../../utilities/decks-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import EditCardPage from '../EditCardPage/EditCardPage';
import DecksPage from '../DecksPage/DecksPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import StudyPage from '../StudyPage/StudyPage';
import AddDeckPage from '../AddDeckPage/AddDeckpage';

export default function App() {
  //Set State
  const [user, setUser] = useState(getUser());
  const [deck, setDeck] = useState([]);
  
  useEffect(function() {
    async function getDecks() {
      const decks = await decksAPI.getAll();
      setDeck(decks);
    }
    getDecks();
    console.log(deck);  
  }, []);

  async function handleAddDeck (newDeckData) {
    const newDeck = await decksAPI.createDeck(newDeckData);
    setDeck([...deck, newDeck])
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
                <DecksPage deck={deck} setDeck={setDeck}/>
              </Route>
              <Route path="/study">
                <StudyPage />
              </Route>
              <Route path="/edit">
                <EditCardPage />
              </Route>
              <Route path="/createdeck">
                <AddDeckPage handleAddDeck={handleAddDeck} user={user} />
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

