import './CardViewer.css';
import {  useState, useEffect, useRef } from 'react';

export default function CardViewer({ handleUpdateCard, studyDeck, setStudyDeck, dueCards}) {

    const [showAnswer, setShowAnswer] = useState(-1);
    const [studyCards, setStudyCards] = useState([]);
    const formRef = useRef();
    const [formData, setFormData] = useState({
        yes: '',
    })

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }


    useEffect(function() {
        let studyCardsVar = dueCards.filter(item => item.deck === studyDeck._id);
        setStudyCards(studyCardsVar);
    }, []);
    let curCard = studyCards[0];

    const handleSubmit = (e) => {
        e.preventDefault() 
        //Update curCard Object to send to database
        let date = new Date();
        if (!formData.checked) {
            curCard.status = 1;
            console.log("hit the nope")
        } else {
            console.log("hit the yep")
            curCard.status += 1;
            if(curCard.status === 2) {
                curCard.due = date.addDays(2);
                console.log(curCard.due);
            } else if (curCard.status === 3) {
                curCard.due = date.addDays(6);
                console.log(curCard.due);
            } else if (curCard.status === 4) {
                curCard.due = date.addDays(14);
                console.log(curCard.due);
            } else if (curCard.status === 5) {
                curCard.due = date.addDays(365);
                console.log(curCard.due);
            }
        } 
        handleUpdateCard(curCard);
        //alter array 
        studyCards.shift();
        setStudyCards(studyCards);
        curCard = studyCards[0];
        setFormData({[e.target.name]: false});
        setShowAnswer(showAnswer * -1);
    }

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.checked
        })
    }

    if (curCard) {
        return (
            <main>
                
                { showAnswer > 0 ? 
                    <div className="QA">
                        <h1>Answer:</h1>
                        <h3 onClick={() => setShowAnswer(showAnswer * -1)}>{curCard.answer}</h3>
                       
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <h4>Did you get it right?</h4>
                            <label>Yes</label>
                            <input
                                className="form-control"
                                name="checked"
                                type="checkbox"
                                value={formData.checked}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                            >Next Question</button>

                        </form>
                        <button onClick={() => setStudyDeck('')}>Back</button>
                    </div> 

                : 
                <div className="QA">
                    <h1>Question:</h1>
                    <h3 onClick={() => setShowAnswer(showAnswer * -1)}>{curCard.question}</h3>
                  
                </div> 
                }
            </main>
        )
    } else {
        return (
            <main>
                <h2>You're finished! Or you broke it. Either way...</h2>
                <button onClick={() => setStudyDeck('')}>Click Here!</button>
            </main>
        )
        
    }
}