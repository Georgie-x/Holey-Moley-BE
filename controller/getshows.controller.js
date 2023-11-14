const { getShows } = require("../model/getshows.model")

exports.getShows=(req, res)=>{
    return getShows()
    .then((shows)=>{
        res.status(200).send({shows})
    })
    .catch((err)=>{
        return err
    })
}
