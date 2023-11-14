const format = require("pg-format");
const db = require("../connection");




const seed = ({ userData, showData, charData, gameData, resultData }) => {
	return db
		.query(`DROP TABLE IF EXISTS results`)
		.then(() => {
			return db.query(`DROP TABLE IF EXISTS games`);
		})
		.then(() => {
			return db.query(`DROP TABLE IF EXISTS chars`);
		})
		.then(() => {
			return db.query(`DROP TABLE IF EXISTS shows`);
		})
		.then(() => {
			return db.query(`DROP TABLE IF EXISTS users`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE users (
        username VARCHAR PRIMARY KEY,
        logged_in BOOLEAN DEFAULT 'false'
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE shows (
        show_id INT PRIMARY KEY,      
        show_name VARCHAR NOT NULL,
        show_img_url VARCHAR  
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE chars (
        show_id INT NOT NULL REFERENCES shows(show_id),
        char_id VARCHAR PRIMARY KEY,
        char_name VARCHAR NOT NULL,
        char_img_url VARCHAR,
        person_id VARCHAR,
        person_name VARCHAR NOT NULL,
        person_img_url VARCHAR
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE games (
        game_id VARCHAR PRIMARY KEY,
        show_id INT REFERENCES shows(show_id),
        Q1_char_id INT,
        Q2_char_id INT,
        Q3_char_id INT,
        Q4_char_id INT,
        Q5_char_id INT,
        Q6_char_id INT,
        Q7_char_id INT,
        Q8_char_id INT,
        Q9_char_id INT,
        Q10_char_id INT
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE results (
        result_id SERIAL PRIMARY KEY,
        game_id VARCHAR,
        username VARCHAR REFERENCES users(username),
        A1_score INT,
        A2_score INT,
        A3_score INT,
        A4_score INT,
        A5_score INT,
        A6_score INT,
        A7_score INT,
        A8_score INT,
        A9_score INT,
        A10_score INT
        );`);
		})
		.then(() => {
			const insertUsers = format(
				`INSERT INTO users (username, logged_in) VALUES %L`,
				userData.map(({ username, logged_in }) => [username, logged_in])
			);
			return db.query(insertUsers);
		})
		.then(() => {
			const insertShows = format(
				`INSERT INTO shows (show_id, show_name, show_img_url) VALUES %L`,
				showData.map(({ show_id, show_name, show_img_url }) => [
					show_id,
					show_name,
					show_img_url,
				])
			);
			return db.query(insertShows);
		})
		.then(() => {
			const insertChars = format(
				`INSERT INTO chars (show_id, person_img_url, person_name, person_id, char_name, char_id, char_img_url) VALUES %L`,
				charData.map(
					({
						show_id,
						person_img_url,
						person_name,
						person_id,
						char_name,
						char_id,
						char_img_url,
					}) => [
						show_id,
						person_img_url,
						person_name,
						person_id,
						char_name,
						char_id,
						char_img_url,
					]
				)
			);
			return db.query(insertChars);
		})
		.then(() => {
			const insertGames = format(
				`INSERT INTO games (game_id, show_id,
          Q1_char_id,
          Q2_char_id,
          Q3_char_id,
          Q4_char_id,
          Q5_char_id,
          Q6_char_id,
          Q7_char_id,
          Q8_char_id,
          Q9_char_id,
          Q10_char_id) VALUES %L`,
				gameData.map(
					({
						game_id,
						show_id,
						Q1_char_id,
						Q2_char_id,
						Q3_char_id,
						Q4_char_id,
						Q5_char_id,
						Q6_char_id,
						Q7_char_id,
						Q8_char_id,
						Q9_char_id,
						Q10_char_id,
					}) => [
						game_id,
						show_id,
						Q1_char_id,
						Q2_char_id,
						Q3_char_id,
						Q4_char_id,
						Q5_char_id,
						Q6_char_id,
						Q7_char_id,
						Q8_char_id,
						Q9_char_id,
						Q10_char_id,
					]
				)
			);
			return db.query(insertGames);
		})
		.then(() => {
			const insertResults = format(
				`INSERT INTO results (game_id,
          username,
          A1_score,
          A2_score,
          A3_score,
          A4_score,
          A5_score,
          A6_score,
          A7_score,
          A8_score,
          A9_score,
          A10_score) VALUES %L`,
				resultData.map(
					({
						game_id,
						username,
						A1_score,
						A2_score,
						A3_score,
						A4_score,
						A5_score,
						A6_score,
						A7_score,
						A8_score,
						A9_score,
						A10_score,
					}) => [
						game_id,
						username,
						A1_score,
						A2_score,
						A3_score,
						A4_score,
						A5_score,
						A6_score,
						A7_score,
						A8_score,
						A9_score,
						A10_score,
					]
				)
			);
			return db.query(insertResults);
		}).catch((err) => {
console.log(err)
    })

};


module.exports = seed;
