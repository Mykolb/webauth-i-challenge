const router = require('express').Router();
const db = require('./register-model');


//POST
router.post('/', (req, res) => {
    db.add()
    .insert(req.body, ('name', 'id'))
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'User could not be added to the database.'})
    })
})


module.exports = router;