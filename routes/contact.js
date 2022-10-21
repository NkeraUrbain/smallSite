const express= require('express')

const path = require('path')

const router= express.Router();

router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, "/../","views","contacts.html"));
});
router.get('/service', function(req, res) {
    res.sendFile(path.join(__dirname, "/../","views","services.html"));
});



module.exports = router;
