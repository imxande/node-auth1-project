// imports router 
const router = require('express').Router();

const Users = require('./users-model.js');

// restricted middleware imported here
const restricted = require('../auth/restricted-middleware.js');


router.get('/', restricted, (req, res) =>{
    Users.find()
        .then(users => {
            res.json(users);
            // res.send('hello from users!')
        })
        .catch(error =>{
            console.log(error);
            res.send(error)
        })
})

module.exports = router;
