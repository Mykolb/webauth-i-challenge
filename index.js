const server = require('./server.js');


//using dotenv to make port dynamic for heroku and other sites
//use backticks not ''
const port = process.env.PORT || 3000;
server.listen(port, () => 
    console.log(`\n** API is running on http://localhost:${port} **\n`)
);