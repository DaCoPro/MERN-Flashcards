import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoriesList';
import CategoriesListItem from '../CategoriesListItem/CategoriesListItem';
import AddCat from '../AddCat/AddCat';

export default function CategoriesList(props) {
    const [showAddCat, setShowAddCat] = useState(-1);
    const handleAddCatClick = () => setShowAddCat(showAddCat * -1)

    const cats = props.cats.map(cat =>
        <li
          key={cat._id}
          className={cat === props.activeCat ? 'active' : ''}
          onClick={() => props.setActiveCat(cat._id)}
        >
          {cat.name}
        </li>
    );
    return (
        <main className="CategoriesList">
            <h2>Subjects:</h2>
            <div>
                 {cats}
            </div>
            <div>
                <button onClick={handleAddCatClick}></button>
                { showAddCat > 0 ? <AddCat user={props.user} showAddCat={showAddCat} setShowAddCat={setShowAddCat} activeCat={props.activeCat} handleAddCat={props.handleAddCat} /> : null }
            </div>
        </main>
    )
}