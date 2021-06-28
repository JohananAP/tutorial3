const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const users = require('../data/users_data')
router.use(bodyParser.json())

router.put('/:id', (req, res) => {
    try {
        if (Object.keys(req.params).length === 0) {
            res.status(400).json(
                {
                    success: false,
                    message: "Missing 'id' parameter.",
                }
            )
        } else {
            var id = req.params.id;
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
                var idFound = false;
                for (let i=0; i< users.length; i++){
                    if(users[i].id == id){
                        idFound=true;
                        if(nameValid){
                            users[i].firstName=name
                        }
                        if(emailValid){
                            users[i].email=email
                        }
                    }
                }
                if( idFound ){
                    res.status(400).json(
                        {
                            success: true,
                            message: "User details updated."
                        }
                    )
                }
                else{
                    res.status(404).json(
                        {
                            success: false,
                            message: "Could not find user.",
                            id: id 
                        }
                    )
                }

            }
            else {
                res.status(400).json(
                    {
                        success: false,
                        message: "Could not understand the body. Body must be JSON format. Body must have 'email' and/or 'firstName'.",
                        body: req.body
                    }
                )
            }
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
