
exports.addNewUser=(username, logged_in)=>{
    return db.query(`
    INSERT INTO users (username, logged_in)
    VALUES ($1, $2) RETURNING *
    `, [username, logged_in])
}