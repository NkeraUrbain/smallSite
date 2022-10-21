const express= require('express')

const path = require('path')

const router= express.Router();

router.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname, "/../","views","services.html"));
});

module.exports = router;
