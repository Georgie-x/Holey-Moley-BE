
exports.getShows=()=>{
    return db.query(`
    SELECT *
    FROM shows;
    `)
    .then((result)=>{
        return result.rows
    })
}