const Tests = require("../models/gameModel");

exports.getGames = async function () {
    try {
        return Tests.find();
    } catch (e) {
        throw Error(e)
    }
}
