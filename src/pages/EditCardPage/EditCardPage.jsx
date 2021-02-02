import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import * as cardsAPI from '../../utilities/cards-api';
import './EditCardPage.css';

export default function UpdateCardPage({ cards, setCards, user, activeCard, handleUpdateCard }){

  const history = useHistory();
  async function handleDeleteCard() {
    await cardsAPI.deleteCard(activeCard);
    const cards = await cardsAPI.getAll();
    setCards(cards);
    history.push('/decks');
  }

  const location = useLocation()

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(activeCard)
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateCard(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="EditCardPage">
      <h1>Edit Card</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question:</label>
          <input
            className="form-control"
            name="question"
            value={ formData.question }
            onChange={ handleChange }
            required
          />
        </div>
        <div className="form-group">
          <label>Answer:</label>
          <input
            className="form-control"
            name="answer"
            value={ formData.answer }
            onChange={ handleChange }
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input
            className="form-control"
            name="status"
            value={ formData.status }
            onChange={ handleChange }
          />
        </div>
        <button
          type="submit"
          className="btn btn-xs"
          
          disabled={invalidForm}
        >
          Save Card
        </button>&nbsp;&nbsp;
      </form>
        <Link to='/decks'>Back</Link>
        <button className="DeleteBtn" onClick={handleDeleteCard} >Delete</button>
    </main>
  );
}