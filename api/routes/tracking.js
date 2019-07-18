var express = require('express');
var router = express.Router();

/* GET tracking listing. */
router.get('/', async function (req, res, next) {
	return res.json({ test: 123 });
});

module.exports = router;
