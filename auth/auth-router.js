// import bycryptjs
const bc = require("bcryptjs");

// importing express and invoking it to create a router
const router = require("express").Router();

// inoirting users model
const Users = require("../users/users-model.js");

// handles get request to the /auth/secrets end point
router.get("/secret", (req, res, next) => {

    // if headers auth exist go and hash it
    if (req.headers.authorization) {
        bc.hash(req.headers.authorization, 8, (err, hash) => {
            // in case of error returns http status code
            if (err) {
                res.status(500).json({ oops: "it broke" });
            }
            // if no error then returns status code success and harsh 
            else {
                res.status(200).json({ hash });
            }
        });
    }
    // no header then return http status code not found  
    else {
        res.status(400).json({ error: "missing header" });
    }
});

// handles post request on the /auth/register end point
router.post("/register", (req, res) => {
    // whatever is added to the body in the req we store it in user
    let user = req.body;

    const hash = bc.hashSync(req.body.password, 8);

    // setting hash to the user's password
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

// handles post req to /auth/login end point
router.post("/login", (req, res) => {
    // destructuring to get username and password from the req.body
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bc.compareSync(password, user.password)) {
               
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;
