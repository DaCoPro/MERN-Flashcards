import {React, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddDeck({ handleAddCard, showAddCard, setShowAddCard, activeCat, handleAddDeck, user, activeDeck }){
  let today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    formData.user = user._id;
    formData.status = 1;
    formData.due = date;
    formData.deck = activeDeck._id;
    console.log(formData);

    handleAddCard(formData);
    setShowAddCard(showAddCard * -1);
    history.push('/decks');
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <h1>New Deck</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question:</label>
          <input
            className="form-control"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Answer:</label>
          <input
            className="form-control"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            required
          />
        </div>
        
        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          Add
        </button>
      </form>
    </>
  );
  
}