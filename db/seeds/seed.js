const format = require("pg-format");
const db = require("../connection");

const seed = ({ usersData, showsData, castData, gamesData, resultsData }) => {
	return db
		.query(`DROP TABLE IF EXISTS results`)
		.then(() => {
			return db.query(`DROP TABLE IF EXISTS games`);
		})
		.then(() => {
			return db.query(`DROP TABLE IF EXISTS cast`);
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
        logged_in BOOLEAN DEFAULT 'false',
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE shows (
        show_id INT PRIMARY KEY,      
        show_name VARCHAR NOT NULL,
        show_img_url VARCHAR,   
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE cast (
        show_id INT NOT NULL REFERENCES shows(show_id),
        char_id VARCHAR PRIMARY KEY,
        char_name VARCHAR NOT NULL,
        char_img_url VARCHAR,
        person_id VARCHAR,
        person_name VARCHAR NOT NULL,
        person_img_url VARCHAR,
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE games (
        game_id SERIAL INT PRIMARY KEY,
        show_id INT REFERENCES cast(show_id),
        Q1_char_id INT,
        Q2_char_id INT,
        Q3_char_id INT,
        Q4_char_id INT,
        Q5_char_id INT,
        Q6_char_id INT,
        Q7_char_id INT,
        Q8_char_id INT,
        Q9_char_id INT,
        Q10_char_id INT,
        );`);
		})
		.then(() => {
			return db.query(`
      CREATE TABLE results (
        game_id SERIAL INT PRIMARY KEY,
        username INT REFERENCES users(username),
        A1_char_id INT,
        A2_char_id INT,
        A3_char_id INT,
        A4_char_id INT,
        A5_char_id INT,
        A6_char_id INT,
        A7_char_id INT,
        A8_char_id INT,
        A9_char_id INT,
        A10_char_id INT,
        );`);
		});
};

module.exports = seed;
