const db = require('../db/connection');

const fetchAllShows = async () => {
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

const fetchShow = async (show_id) => {
    const query = `SELECT * FROM shows WHERE show_id = $1`   
    const body = await db.query(query, [show_id])
    if (body.rows.length === 0) {
        return Promise.reject({ status: 404, message: "show id not found"})
    } else {
        return body.rows[0]
    }        
}

module.exports = {fetchAllShows, fetchShow}