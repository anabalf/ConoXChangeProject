const express = require('express');
const misc = require('../controllers/misc.controller');
const users = require('../controllers/users.controller');
const skills = require('../controllers/skills.controller');
const messages = require('../controllers/messages.controller');
const secure = require("../middlewares/auth.middleware");

const router =  express.Router();

router.get('/', misc.home);

// Users CRUD
router.get('/register', users.create);
router.post('/register', users.doCreate);

router.get('/login', users.login);
router.post('/login', users.doLogin);

router.get("/edit", secure.isAuthenticated, users.edit); 
router.post("/edit", secure.isAuthenticated, users.doEdit);

router.get('/logout', users.logout);

//router.get('/profile', secure.isAuthenticated, users.profile);


//Skills CRUD

router.get('/skills/new', secure.isAuthenticated, skills.create);
router.post('/skills/new',secure.isAuthenticated, skills.doCreate);

router.get('/profile', secure.isAuthenticated, skills.list); //** */
router.get("/detail/:id",secure.isAuthenticated, skills.detail);

router.get("/skills/:id/edit",secure.isAuthenticated,skills.edit);
router.post("/skills/:id/edit",secure.isAuthenticated,skills.doEdit);

router.get("/skills/:id/delete",secure.isAuthenticated,skills.delete);

router.get("/search", secure.isAuthenticated, skills.show);

router.get("/skill-owner", secure.isAuthenticated, skills.list ); //preguntar: una misma accion de controlador, se puede usar para dos rutas?

//Skills messages
router.post('/search/:skillId/messages', secure.isAuthenticated, messages.doCreate);

module.exports = router;