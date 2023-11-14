
const { getAllUsers, patchUser, addNewUser } = require("../models/users.model");

exports.getAllUsers = (req, res) => {
	return getAllUsers()
		.then((users) => {
			res.status(200).send({ users });
		})
		.catch((err) => {
			return err;
		});
};

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