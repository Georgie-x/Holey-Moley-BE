const db = require('../db/connection')

exports.get5char=(show_id, num)=>{
    return db.query(`
    SELECT * FROM chars WHERE show_id ='${show_id}' ORDER BY RANDOM() LIMIT ${num};
    `)
    .then(({rows})=>{
        return rows
    })
}


exports.getCharacters =()=>{
    return db.query(`
    SELECT * 
    FROM chars;
    `)
    .then((result)=>{
        return result.rows
    })
}