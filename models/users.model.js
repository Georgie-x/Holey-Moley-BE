const db = require("../db/connection")

exports.getAllUsers = () => {
  return db.query(`
    SELECT *
    FROM users;`)
    .then((result)=>{
        return result.rows
    })
}

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


exports.patchUser=(username)=>{

    return db.query(`
    UPDATE users SET logged_in = TRUE
    WHERE username = ${username} RETURNING *;
    `)
    .then(({rows})=>{
        console.log(rows[0])
        return rows[0]
    })
}