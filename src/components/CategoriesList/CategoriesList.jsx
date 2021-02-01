import { useState } from 'react';
import './CategoriesList.css';
import AddCat from '../AddCat/AddCat';

export default function CategoriesList(props) {
    const [showAddCat, setShowAddCat] = useState(-1);
    const handleAddCatClick = () => setShowAddCat(showAddCat * -1)

    async function handlePickCat(cat) {
        props.setActiveCat(cat);
        props.setActiveDeck("")
    }

    const cats = props.cats.map(cat =>
        <h3
          key={cat._id}
          className={cat === props.activeCat ? 'active' : ''}
          onClick={() => handlePickCat(cat)}
        //   onClick={() => props.setActiveDeck("")}
        >
          {cat.name}
        </h3>
    );
    return (
        <main className="CategoriesList">
            <h2>Subjects</h2>
            <div>
                 {cats}
                 <h3></h3>
            </div>
            <div>
                <button className="AddClass" onClick={handleAddCatClick}>+</button>
                { showAddCat > 0 ? <AddCat user={props.user} showAddCat={showAddCat} setShowAddCat={setShowAddCat} activeCat={props.activeCat} handleAddCat={props.handleAddCat} /> : null }
            </div>
        </main>
    )
}