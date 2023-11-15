const db = require('../db/connection');
exports.patchUser=(username, status)=>{

    return db.query(`
    UPDATE users SET logged_in = ${status}
    WHERE username = ${username} RETURNING *;
    `)
    .then(({rows})=>{
        console.log(rows[0])
        return rows[0]
    })
}