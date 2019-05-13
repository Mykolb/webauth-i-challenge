const router = require('express').Router();
const db = require('./login-model');
//import for hash 
const bcrypt = require('bcryptjs');

//POST
router.post('/', (req, res) => {
    let { username, password } = req.body;

 db.add()
    .insert(req.body, 'name')
    .then(user => {
        //if pwds match....
        if(user && bcrypt.compareSync(password, user.password)) {
            res.status(201).json({ message: `You are logged in as ${user.username}!` });
        } else {
            res.status(401).json({message: 'You do not have the correct creds.' })
        }
       
    })
    .catch(err => {
        res.status(500).json({ error: err.message})
    })
})

module.exports = router;