const express = require('express');

const router = express.Router();
const users = require('../data/users_data')

router.get('/:id', (req, res) => {
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
            let user ;

            var idFound = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    idFound = true;
                    user = users[i]
                }
            }

            if (idFound) {
                res.status(400).json(
                    {
                        success: true,
                        message: "User found.",
                        user: user
                    }
                )
            }
            else {
                res.status(404).json(
                    {
                        success: false,
                        message: "Could not find user.",
                        id: id
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
