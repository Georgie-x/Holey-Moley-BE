const { addNewUser } = require("../models/addNewUser.model");

exports.addNewUser = (req, res) => {
	const username = req.body.username
	const logged_in = req.body.logged_in

	console.log(username, logged_in, "addNEW USER PAGE")

	addNewUser(req.body)
		.then((response) => {
			res.status(201).send(response);
		})
		.catch((err) => {
			console.log(err);
		});
};
