const express = require('express');

const router = express.Router();
const users = require('../data/users_data')

router.get('/', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Found list of users.",
            users: users
        }
        )
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
