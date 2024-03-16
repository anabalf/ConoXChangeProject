const Petition = require('../models/petition.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');

module.exports = (req, res, next => {
    res.render('petitions/create')
})
