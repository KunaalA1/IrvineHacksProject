const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const courseController = require('../controllers/courseController');


router.get('/profs', courseController.prof_index);

router.get('/profs/applications', courseController.prof_apps);
router.post('/profs/applications', courseController.prof_app_post);





module.exports = router;