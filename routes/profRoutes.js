const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const courseController = require('../controllers/courseController');


router.get('/profs', courseController.prof_index);

router.get('/profs/:id', courseController.prof_details);
router.post('/profs/')



module.exports = router;