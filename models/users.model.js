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

exports.updateUser = (username) => {
	return db
		.query(
			`
    UPDATE users SET logged_in = TRUE
    WHERE username = $1
    `,
			[username]
		)
		.then(({ rows }) => {
			console.log(rows);
			return rows[0];
		});
};

exports.insertUser = (username, logged_in) => {
	console.log(username, logged_in);
	return db
		.query(
			`
    INSERT INTO users (username, logged_in)
    VALUES ($2, $3)
    `,
			[username, logged_in]
		)
		.then(({ rows }) => {
			return rows[0];
		});
};


