import './AddCat.css';
import {React, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddCat({ handleAddCat, user, setShowAddCat, showAddCat }){
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
    handleAddCat(formData);
    setShowAddCat(showAddCat * -1);
    history.push('/decks');
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="AddCat">
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
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
    </main>
  );
  
}