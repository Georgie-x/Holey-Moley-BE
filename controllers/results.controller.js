const { fetchAllResults } = require("../models/results.model");

exports.getAllResults = async (req, res, next) => {
	try {
		const results = await fetchAllResults();
		return res.status(200).send({ results });
	} catch (err) {
		next(err);
	}
};


 

