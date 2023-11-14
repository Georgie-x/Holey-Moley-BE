exports.getCharacters=()=>{
    return db.query(`
    SELECT * 
    FROM chars;
    `)
}