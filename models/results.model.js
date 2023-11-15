const db = require("../db/connection");

const fetchAllResults = async () => {
	const query = `
    SELECT results.game_id, results.username, results.A1_score, results.A2_score, results.A3_score, results.A4_score, results.A5_score, results.A6_score, results.A7_score, results.A8_score, results.A9_score, results.A10_score
    FROM results
    `;
	const body = await db.query(query);
	if (body.rows.length === 0) {
		return Promise.reject({ status: 404, message: "no results found" });
	} else {
		return body.rows;
	}
};

const fetchResultsByUser = async (username) => {
	const query = `
    SELECT results.game_id, results.username, results.A1_score, results.A2_score, results.A3_score, results.A4_score, results.A5_score, results.A6_score, results.A7_score, results.A8_score, results.A9_score, results.A10_score
    FROM results
	WHERE results.username = $1
    `;
	const body = await db.query(query, [username]);
	if (body.rows.length === 0) {
		return Promise.reject({ status: 404, message: "no results found" });
	} else {		
		return body.rows;
	}
};

module.exports = {fetchAllResults, fetchResultsByUser}
