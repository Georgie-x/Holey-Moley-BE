const db = require('../db/connection');

const fetchShows = async () => {
    const query = `
    SELECT shows.show_id, shows.show_name, shows.show_img_url
    FROM shows
    `
    const body = await db.query(query) 
    if (body.rows.length === 0) {
        return Promise.reject({ status: 404, message: "no shows found"})
    } else {
    return body.rows
    }
}

module.exports = {fetchShows}