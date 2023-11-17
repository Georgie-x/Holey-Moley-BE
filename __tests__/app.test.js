const app = require("../app.js");
const request = require("supertest");
const db = require("../db/connection");
const data = require("../db/data/test-data/index.js");
const seed = require("../db/seeds/seed.js");

beforeEach(() => {
	return seed(data);
});
afterAll(() => {
	db.end();
});

describe("GET /api/shows", () => {
	test("should return a status code of 200 and shows array", () => {
		return request(app)
			.get("/api/shows")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});

describe("GET /api/shows/:show_id", () => {
	test("should return a status code of 200 and show array", () => {
		return request(app)
			.get("/api/shows/83")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});

describe("GET /api/results", () => {
	test("should return a status code of 200 and results array", () => {
		return request(app)
			.get("/api/results")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});

describe("GET /api/results", () => {
	test("should return a status code of 200 and results array", () => {
		return request(app)
			.get("/api/results")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});

describe("GET /api/results/:username", () => {
	test("should return a status code of 200 and results array", () => {
		return request(app)
			.get("/api/results/Flo")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});

describe("GET /api/users", () => {
	test("should return all users", () => {
		return request(app)
			.get("/api/users")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});
describe("GET /api/chars", () => {
	test("should return all chars", () => {
		return request(app)
			.get("/api/characters")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});

describe("GET /api/characters/:show_id/:num", () => {
	test("should return 5 characters", () => {
		return request(app)
			.get("/api/characters/83/5")
			.expect(200)
			.then(({ body }) => {
				return body;
			});
	});
});

describe("POST /users/", () => {
	test("should add new user to database", () => {

			const newUser = {username: "barney", logged_in: true}
			return request(app)
			.post("/api/users/")
			.send(newUser)
			.expect(201)
			.then(({ body }) => {
				console.log(body)
				expect(body).toMatchObject({
					username: "barney",
					logged_in: true
				});
			});
	});
});

describe("PATCH /users/:username", () => {
	test("should change user logged_in status to true in database", () => {
			const newStatus = { logged_in: true}
			return request(app)
			.patch("/api/users/John")
			.send(newStatus)
			.expect(200)
			.then(({ body }) => {
				console.log(body)
				expect(body).toMatchObject({
					username: "John",
					logged_in: true
				});
			});
	});
});

