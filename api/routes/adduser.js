const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');

const router = express.Router();
const users = require('../data/users_data')
router.use(bodyParser.json())

router.put('/', (req, res) => {
    try {
        var nameValid = false;
        var emailValid = false;
        var name = null;
        var email = null;

        if (req.body.hasOwnProperty('email')) {
            email = req.body.email;
            emailValid = true;
        }
        if (req.body.hasOwnProperty('firstName')) {
            name = req.body.firstName;
            nameValid = true;
        }
        if (nameValid && emailValid) {
            if(name === '' || email === ''){
                res.status(400).json(
                    {
                        success: false,
                        message: "'email'/'firstName' cannot be empty.",
                        body: req.body
                    }
                )
                return;
            }
            var id = shortid.generate()
            var newUser={
                "id": id,
                "firstName": name,
                "email": email,
            }
            users.push(newUser)
            res.status(400).json(
                {
                    success: true,
                    message: "New User added.",
                    id: id
                }
            )
        }
        else {
            res.status(400).json(
                {
                    success: false,
                    message: "Could not understand the body. Body must be JSON format. Body must have 'email' and 'firstName'.",
                    body: req.body
                }
            )
        }

    }
    catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Server Internal Error."
            }
        )

    }
})

module.exports = router;
