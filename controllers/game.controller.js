const GameService = require('../services/game.service');

exports.getGames = async function (req, res) {
    try {
        let games = await GameService.getGames()
        res.status(200)
        res.send(games);
    } catch (e) {
        res.status(400)
        res.send();
    }
}
