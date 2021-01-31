import './CategoriesList';
import CategoriesListItem from '../CategoriesListItem/CategoriesListItem';

export default function CategoriesList(props) {
    // const showCats = props.cats.map(item => 
    //     <CategoriesListItem key={item._id} cat={item} />
    // );

    const cats = props.cats.map(cat =>
        <li
          key={cat}
          className={cat === props.activeCat ? 'active' : ''}
          // FYI, the below will also work, but will give a warning
          // className={cat === activeCat && 'active'}
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
                {/* <Link to="/createdeck">+</Link> */}
            </div>
        </main>
    )
}