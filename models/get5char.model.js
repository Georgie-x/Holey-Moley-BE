const db = require('../db/connection')

exports.get5char=(show_id, num)=>{
    return db.query(`
    SELECT * FROM chars WHERE show_id ='${show_id}' ORDER BY RANDOM() LIMIT ${num};
    `)
    .then(({rows})=>{
        console.log(rows)
        return rows
    })
}