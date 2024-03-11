const createError = require('http-errors');
const Message = require('../models/message.model');
const Skill = require('../models/skill.model');
const mongoose = require('mongoose');

module.exports.doCreate = (req, res, next) => {
    const { skillId, recipientId } = req.params;
    Skill.findById(skillId)
        .then((skill) => {
            if(!skill) {
                next(createError(404, 'Skill not found'));
            } else {
                const message = req.body;
                message.sender = req.user.id;
                message.receiver = recipientId; //
                return Message.create(message)
                    .then(() => res.redirect('/search')) //cambiar a detail de la skill cuando la tengamos
                    .catch((error) => {
                        if (error instanceof mongoose.Error.ValidationError) {
                            res.status(400).render('/search') //cambiar a detail de la skill cuando la tengamos
                        } else {
                            next(error);
                        }
                    });
            }
        }).catch(next);
}