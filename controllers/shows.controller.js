const { fetchAllShows, fetchShowById } = require("../models/shows.model");

exports.getAllShows = async (req, res, next) => {
	try {
		const shows = await fetchAllShows();
		return res.status(200).send({ shows });
	} catch (err) {
		next(err);
	}
};

exports.getShowById = async (req, res, next) => {
	try { 
		const { show_id } = req.params
		const shows = await fetchShowById( show_id);
		return res.status(200).send({ shows });
	} catch (err) {
		next(err);
	}
};

