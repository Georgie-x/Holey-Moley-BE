const { getAllUsers } = require("../models/getAllUsers.model");

exports.getAllUsers = (req, res) => {
	return getAllUsers()
		.then((users) => {
			res.status(200).send({ users });
		})
		.catch((err) => {
			return err;
		});
};
