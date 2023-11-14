const db = require('../db/connection')

exports.getCharacters =()=>{
    return db.query(`
    SELECT * 
    FROM chars;
    `)
    .then((result)=>{
        return result.rows
    })
}