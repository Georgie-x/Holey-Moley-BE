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
	console.log(username, logged_in)
	return db
		.query(
			`
    UPDATE users SET logged_in = $2::boolean
    WHERE username = $1::varchar 
	RETURNING *
    `,
			[username, logged_in]
		)
		.then(({ rows }) => {
			console.log(rows)
			return rows[0]
		}).catch((err) => {
			console.log(err);
		});
};

exports.insertUser = (username, logged_in) => {
	return db
		.query(
			`
    INSERT INTO users (username, logged_in)
    VALUES ($1::varchar, $2::boolean)
	RETURNING *
    `,
			[username, logged_in]
		)
		.then(({ rows }) => {
			console.log(rows)
			return rows[0]
		}).catch((err) => {
			console.log(err);
		});
};


