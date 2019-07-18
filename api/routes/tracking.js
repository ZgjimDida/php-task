var express = require('express');
var router = express.Router();
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
var result;

/* GET tracking listing. */
router.get('/:id', async function (req, res, next) {
	result = null;
	fs.createReadStream('data.csv')
		.pipe(csv())
		.on('data', (data) => results.push(data))
		.on('end', () => {
			results.forEach(item => {
				if (item.trackingId == req.params.id) {
					result = item.estimatedDeliveryDate;
				}
			})
			if (result) {
				return res.json({ estimatedDeliveryDate: result })
			} else {
				return res.json({ error: "No tracking id found" })
			}
		});

});

module.exports = router;
