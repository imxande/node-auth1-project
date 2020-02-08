// importing server
const server = require('./api/server.js');

// importing PORT
const PORT = process.env.PORT || 8000;

// listening for traffic
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`))


