const { fetchShows } = require("../models/shows.model");

exports.getAllShows = async (req, res, next) => {
	try {
		const shows = await fetchShows();
		return res.status(200).send({ shows });
	} catch (err) {
		next(err);
	}
};
