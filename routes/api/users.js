const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/user');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

// Just to test the token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;