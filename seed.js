require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Category = require('./models/category');
const Deck = require('./models/deck');

(async function () {

    await User.deleteMany({});
    const users = await User.create([
        {name: 'God', email: 'god@gmail.com', password: 'god123'}
    ]);

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Etc.',
        user: users[0]}
    ]);

    await Deck.deleteMany({});
    const decks = await Deck.create([
        {name: 'Welcome', 
        category: categories[0], 
        cards: [{
            question: 'Will this work?',
            answer: 'Yes!',
            status: 1,
            due: "2015-03-25"
        }], 
        user: users[0]}
    ]);
    console.log(decks)
    process.exit();
})();
