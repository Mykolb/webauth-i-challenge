const router = require('express').Router();
const Users = require('./register-model');
//add import for hash 
const bcrypt = require('bcryptjs');


//POST
//WORKING
router.post('/', (req, res) => {
    let user = req.body; //user contains plain txt pwd/username
    const hash = bcrypt.hashSync(user.password, 5)// 2^10 rounds, higher the #, longer it takes to crack it, don't want it to burt user experience 
    //overrride user.pwd with hashed pwd 
    user.password = hash;

    Users.add(user)
    .insert(req.body)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'User could not be added to the database.'})
    })
})


module.exports = router;