
exports.addNewUser=(username)=>{
    return db.query(`
    INSERT INTO users (username, logged_in)
    VALUES ($1, $2) RETURNING *
    `, [username, false])
    .then(({rows})=>{
        console.log(rows[0])
        return rows[0]
    })
}