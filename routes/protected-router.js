const router = require('express').Router();
const db = require('./users-model');
//add import for hash 
const bcrypt = require('bcryptjs');


//POST
//WORKING
router.post('/register', (req, res) => {
    let user = req.body; //user contains plain txt pwd/username
    const hash = bcrypt.hashSync(user.password, 5)// 2^10 rounds, higher the #, longer it takes to crack it, don't want it to burt user experience 
    //overrride user.pwd with hashed pwd 
    user.password = hash;

    db.add(user)
    // .insert(req.body)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'User could not be added to the database.'})
    })
})

//POST
router.post('/login', (req, res) => {
    let { username, password } = req.body;

 db.findBy({ username })
    .first()
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