const createError = require('http-errors');
const Message = require('../models/message.model');
const Skill = require('../models/skill.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');

module.exports.create = (req, res, next) => {
    const { id } = req.params;
    Skill.findById(id)
        .populate("owner")
        .then((skill) => { res.render ("messages/messages", { skill }) })
        .catch((error) => next(error))
}

module.exports.doCreate = (req, res, next) => {
    const { id } = req.params;

    
    /*Skill.findById(id)
        .then((skill) => {
            if(!skill) {
                next(createError(404, 'Skill not found'));
            } else {
                const message = req.body;
                message.sender = req.user.id;
                message.receiver = skill.owner;
                
                Message.create(message)
                    .then((createdMessage) => 
                    return Message.find
                    res.render(`/messages/${skill.id}`)) 
                    .catch((error) => {
                        if (error instanceof mongoose.Error.ValidationError) {
                            res.status(400).render(`/messages/${skill.id}`) 
                        } else {
                            next(error);
                        }
                    });
            }
        }).catch(next);*/
}