import {React, useState, useRef, useEffect } from 'react';

export default function AddDeckPage(props){
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
    props.handleAddDeck(formData);
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