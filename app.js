const express = require('express');

const app = express();

const users = require('./api/routes/users')
const update = require('./api/routes/update')
const getuser = require('./api/routes/getuser')
const adduser = require('./api/routes/adduser')

app.use('/users', users)
app.use('/update', update)
app.use('/user', getuser)
app.use('/add', adduser)

module.exports = app;