const express = require('express')
const router = express.Router()
const ctrl = require('../controller/user')

router.get('/register', ctrl.register)

router.get('/login', ctrl.login)

router.post('/register', ctrl.register1)

router.post('/login', ctrl.login1)

module.exports = router