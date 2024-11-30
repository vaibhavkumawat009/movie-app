const favMovie = require('../model/favMovie')

exports.addToFav = async (req, res) => {
    try {
        const result = await favMovie.create(req.body)
        res.status(200).send({message: "Add To Fav Success", result: result})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error", result: error});
    }
}
exports.getAllFav = async (req, res) => {
    try {
        const result = await favMovie.findAll()
        res.status(200).send({message: "List Of All Fav", result: result})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error", result: error});
    }
}