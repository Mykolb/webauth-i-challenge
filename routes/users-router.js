const router = require('express').Router();

const db = require('./users-model');

//GET
router.get('/', (req, res) => {
    db.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(401).json({ error: err.message})
    })
})