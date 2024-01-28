const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const courseController = require('../controllers/courseController');


router.get('/profs', courseController.prof_index);

router.get('/applications', courseController.prof_apps);
router.post('/applications', courseController.prof_app_post);

router.delete('/applications/:id', courseController.prof_app_delete);



module.exports = router;