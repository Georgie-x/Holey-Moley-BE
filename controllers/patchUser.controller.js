const { patchUser } = require("../models/patchUser.model");

exports.patchUser = (req, res) => {
	const { username } = req.params;
	console.log(req.body, username);

	patchUser(req.body, username)
		.then((response) => {
			res.status(201).send(response);
		})
		.catch((err) => {
			console.log(err);
		});
};
