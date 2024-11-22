const express = require('express');
const router = express.Router();
const addSchool = require('../api/addschoolcontroller');
const listSchools = require('../api/listschoolcontroller');
router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);
module.exports = router;
