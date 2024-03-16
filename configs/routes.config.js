const express = require('express');
const misc = require('../controllers/misc.controller');
const users = require('../controllers/users.controller');
const skills = require('../controllers/skills.controller');
const messages = require('../controllers/messages.controller');
const ratings = require('../controllers/ratings.controller');
const secure = require('../middlewares/auth.middleware');

const router =  express.Router();

router.get('/', misc.home);

// Users CRUD
router.get('/register', users.create);
router.post('/register', users.doCreate);

router.get('/login', users.login);
router.post('/login', users.doLogin);

router.get('/edit', secure.isAuthenticated, users.edit); 
router.post('/edit', secure.isAuthenticated, users.doEdit);

router.get('/logout', users.logout);


//Skills CRUD

router.get('/skills/new', secure.isAuthenticated, skills.create);
router.post('/skills/new',secure.isAuthenticated, skills.doCreate);

router.get('/profile/:userId', secure.isAuthenticated, skills.list); 
router.get('/detail/:id',secure.isAuthenticated, skills.detail);

router.get('/skills/:id/edit',secure.isAuthenticated, skills.edit);
router.post('/skills/:id/edit',secure.isAuthenticated, skills.doEdit);

router.get('/skills/:id/delete',secure.isAuthenticated, skills.delete);

router.get('/search', secure.isAuthenticated, skills.show);


//Skills messages
router.get('/messages/:id', secure.isAuthenticated, messages.create);
router.post('/messages/:id', secure.isAuthenticated, messages.doCreate);

//Skills rating
router.post('/detail/:id', secure.isAuthenticated, ratings.doCreate);


module.exports = router;