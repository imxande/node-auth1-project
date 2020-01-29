// import express and get express to create a router
const router = require('express').Router();

// import auth router
const authRouter = require('../auth/auth-router.js');

// import user router
const usersRouter = require('../users/users-router.js');

// auth end point
router.use('/auth', authRouter);

// users endpoint
router.use('/users', usersRouter);

router.get('/', (req, res) =>{
    res.json({ api: "This is running"});
});

// exports router
module.exports = router;