const mongoose = require('mongoose');

const GamesSchema  = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
})

const Games = mongoose.model('games', GamesSchema)

module.exports = Games;
