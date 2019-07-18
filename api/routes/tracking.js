var express = require('express');
var router = express.Router();

/* GET tracking listing. */
router.get('/:id', async function (req, res, next) {
	return res.json({ test: req.params.id });
});

module.exports = router;
