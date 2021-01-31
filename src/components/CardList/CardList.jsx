import './CardList';

export default function CardList({ activeDeck }) {

  
    let cards = [];
    if (activeDeck) {

        const cardsArray = activeDeck.cards;
        cards = cardsArray.map(card =>
            <li
            key={card._id}
            >
            {card.question}
            </li>
        );
        
    }


    return (
        <main>
            <h2>Cards:</h2>
            <div>
                {cards}
            </div>
        </main>

    )
}