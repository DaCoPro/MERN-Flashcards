import {React, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddDeckPage({ handleAddDeck, user }){
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    formData.category = "6015f4ab33533a47d7e7aa05";
    formData.cards = [];
    formData.user = user._id;

    console.log(formData);
    handleAddDeck(formData);
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
          <label>Deck Name</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
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