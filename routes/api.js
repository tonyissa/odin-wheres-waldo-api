var express = require('express');
var router = express.Router();

const Score = require('../models/Score');
const Coords = require('../models/Coords');

/* GET scores */
router.get('/scores', async (req, res, next) => {
    const response = await Score.find().exec();
    res.json(response);
});

/* COMPARE coords */
router.post('/compare-coords', async (req, res, next) => {
    const response = await Coords.find().exec();
    for (let i = 0; i < response.length; i++) {
        if (req.body.YCoord >= response[i].YCoords[0] && req.body.YCoord <= response[i].YCoords[1] && 
            req.body.XCoord >= response[i].XCoords[0] && req.body.XCoord <= response[i].XCoords[1]) {
                return res.status(202).json({ name: response[i].name })
        }
    }
    return res.sendStatus(200);
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
