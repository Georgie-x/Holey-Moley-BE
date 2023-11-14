const { fetchAllResults, fetchResultsByUser } = require("../models/results.model");

exports.getAllResults = async (req, res, next) => {
	try {
		const results = await fetchAllResults();
		return res.status(200).send({ results });
	} catch (err) {
		next(err);
	}
};

exports.getResultsByUser = async (req, res, next) => {
	try {
		console.log("cont")
		const {username} = req.params
		console.log(username)
		const results = await fetchResultsByUser(username);
		return res.status(200).send({ results });
	} catch (err) {
		next(err);
	}
};

 

