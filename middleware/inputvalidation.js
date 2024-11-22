const Joi = require('joi');

const validateSchoolData = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

const validateUserLocation = (req, res, next) => {
    const schema = Joi.object({
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
    });

    const { error } = schema.validate(req.query);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

module.exports = { validateSchoolData, validateUserLocation };
