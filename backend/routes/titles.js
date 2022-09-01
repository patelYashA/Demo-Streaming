const router = require("express").Router();
let Title = require("../models/title.model")

router.route("/series").get((req, res) => {
    Title.find({ programType: "series", releaseYear: { $gte: 2010 } }).sort({title: "asc"})
        .then(series => res.json(series))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/movies").get((req, res) => {
    Title.find({ programType: "movie", releaseYear: { $gte: 2010 } }).sort({title: "asc"})
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;