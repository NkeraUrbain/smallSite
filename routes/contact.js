const express= require('express')

const path = require('path')

const router= express.Router();

router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, "/../","views","contacts.html"));
});


module.exports = router;
