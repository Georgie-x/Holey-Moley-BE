const db = require("../db/connection");

exports.getAllUsers = () => {
	return db
		.query(
			`
    SELECT *
    FROM users;`
		)
		.then((result) => {
			return result.rows;
		});
};

exports.updateUser = (username, logged_in) => {
    console.log(username, logged_in);
	return db
		.query(
			`
    UPDATE users SET logged_in = $2
    WHERE username = $1::text
    `,
			[username, logged_in]
		)
		.then(({ rows }) => {;
			return rows[0];
		}).catch((err) => {
			console.log(err);
		});
};

exports.insertUser = (username, logged_in) => {
	console.log(username, logged_in);
	return db
		.query(
			`
    INSERT INTO users (username, logged_in)
    VALUES ($3, $4)
    `,
			[username, logged_in]
		)
		.then(({ result }) => {
            console.log(result)
			return rows[0];
		}).catch((err) => {
			console.log(err);
		});
};


