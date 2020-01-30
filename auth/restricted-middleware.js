// import bcryptjs
const bcrypt = require("bcryptjs");

// import users model
const Users = require("../users/users-model.js");

// export module here
module.exports = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({ you: "Mo access!" });
    }
};
