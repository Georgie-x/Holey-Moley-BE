const { addNewUser } = require("../models/addNewUser.model");

exports.addNewUser = (req, res) => {
	const { username } = req.params;

	addNewUser(req.body, username)
		.then((response) => {
			res.status(201).send(response);
		})
		.catch((err) => {
			console.log(err);
		});
};
