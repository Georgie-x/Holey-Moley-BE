const { patchUser } = require("../models/patchUser.model");

exports.patchUser = (req, res) => {
	const { username, status } = req.params;
	console.log(req.body, username);

	patchUser(req.body, username, status)
		.then((response) => {
			res.status(201).send(response);
		})
		.catch((err) => {
			console.log(err);
		});
};
