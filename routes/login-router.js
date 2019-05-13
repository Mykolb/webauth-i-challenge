const router = require('express').Router();
const db = require('./login-model');


//POST
router.post('/', (req, res) => {
 db.add()
    .insert(req.body, 'name')
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({ error: err.message})
    })
})

module.exports = router;