import './CategoriesList';
import CategoriesListItem from '../CategoriesListItem/CategoriesListItem';

export default function CategoriesList({ cats, setCats }) {
    const showCats = cats.map(item => 
        <CategoriesListItem key={item._id} cat={item} />
    );
    return (
        
        <main className="CategoriesList">
            <h2>Subjects:</h2>
            <div>
                {showCats} 
            </div>
            <div>
                {/* <Link to="/createdeck">+</Link> */}
            </div>
        </main>
    )
}