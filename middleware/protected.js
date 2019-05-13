//mw function 
const protected = (req, res, next) => {
    const { username, password } = req.headers;


    if (username && password && bcrypt.compareSync(password, user.password)) {
        next();
      } else {  
        res.status(401).json({message: 'You shall not pass!'})
      }
    }

module.exports = protected;


