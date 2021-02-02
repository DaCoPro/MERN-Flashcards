import './StudyPage.css';
import CardViewer from '../../components/CardViewer/CardViewer';
import {  useState } from 'react';

export default function StudyPage ({  handleUpdateCard, cards, dueCards, dueDecks }) {
  
  const [studyDeck, setStudyDeck] = useState([]);
  
  
  async function handleStudyClick(el) {
    setStudyDeck(el);
    
  }
  

  const decks = dueDecks.map(deck =>
      <h3
        key={deck._id}
        onClick={() => handleStudyClick(deck)}
      >
        {deck.name}
      </h3>
  );
  return (
      <main className="StudyPage">
        { studyDeck !== "" ? <CardViewer handleUpdateCard={handleUpdateCard} studyDeck={studyDeck} setStudyDeck={setStudyDeck} dueCards={dueCards}/> : <div>
          { dueDecks.length ? <h1>Here's what you should study:</h1> : <h1>You're all done for today!</h1>}
          {decks}
          </div>}
      </main>
  )
}