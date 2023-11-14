const { getCharacters } = require("../model/getCharacters.model")

exports.getCharacters=(req, res)=>{
    return getCharacters()
    .then((characters)=>{
        res.status(200).send({characters})
    })
    .catch((err)=>{
        return err
    })
}