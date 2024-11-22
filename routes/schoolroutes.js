const express = require('express');
const router = express.Router();
const addSchool = require('../schoolcontroller/addschoolcontroller');
const listSchools = require('../schoolcontroller/listschoolcontroller');
router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);
module.exports = router;
