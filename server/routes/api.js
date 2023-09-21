const express = require('express');

const wakatimeController = require('../controllers/wakatimeController');

const router = express.Router();

router.get('/wakatime', wakatimeController.fetchData);

module.exports = router;