const db = require('../db/connection');
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