const express = require('express');
const router = express.Router();

router.use('/api/', require('./produtos'));

module.exports = router;