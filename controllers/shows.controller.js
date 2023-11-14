const { fetchAllShows, fetchShow } = require("../models/shows.model");

exports.getAllShows = async (req, res, next) => {
	try {
		const shows = await fetchAllShows();
		return res.status(200).send({ shows });
	} catch (err) {
		next(err);
	}
};

exports.getShow = async (req, res, next) => {
	console.log("incont")
	try { 
		const { show_id } = req.params
		const shows = await fetchShow( show_id);
		return res.status(200).send({ shows });
	} catch (err) {
		next(err);
	}
};

