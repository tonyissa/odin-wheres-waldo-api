var express = require('express');
var router = express.Router();

const Score = require('../models/Score');
const Coords = require('../models/Coords');

/* GET coords */
router.get('/get-coords', async (req, res, next) => {
    const response = await Coords.find().exec();
    res.json(response);
});

/* GET scores */
router.get('/scores', async (req, res, next) => {
    const response = await Score.find().exec();
    res.json(response);
});

/* POST score */
router.post('/upload-score', async (req, res, next) => {
    try {
        const newScore = new Score({
            name: req.body.name,
            time: req.body.time
        })
        await newScore.save()
        res.sendStatus(200);
    } catch (err) {
        console.log(err.errors.name.kind)
        res.status(400).json({ error: err.errors.name.message })
    }
});

module.exports = router;
