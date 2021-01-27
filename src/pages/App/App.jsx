import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import EditCardPage from '../EditCardPage/EditCardPage';
import DecksPage from '../DecksPage/DecksPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import StudyPage from '../StudyPage/StudyPage';

export default function App() {
  const [user, setUser] = useState(getUser());

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
                <DecksPage />
              </Route>
              <Route path="/study">
                <StudyPage />
              </Route>
              <Route path="/edit">
                <EditCardPage />
              </Route>
              <Redirect to="/home" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

