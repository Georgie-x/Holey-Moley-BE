
const { getAllUsers, updateUser, insertUser } = require("../models/users.model");

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
	const { username } = req.params
	const { logged_in } = req.body
	return updateUser(username, logged_in)

		.then((response) => {
			res.status(201).send(response);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postUser = (req, res) => {
	const { username, logged_in } = req.body;
	console.log("ni", username, logged_in)
	return insertUser(username, logged_in)
		.then((response) => {
			res.status(201).send(response);
		})
		.catch((err) => {
			console.log(err);
		});
};