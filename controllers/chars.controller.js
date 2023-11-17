const { getCharacters, get5char } = require("../models/chars.model")

exports.get5char=(req,res)=>{
    const {show_id, num} = req.params
    return get5char(show_id, num)
    .then((characters)=>{
        res.status(200).send({characters})
    })
    .catch((err)=>{
        return err
    })
}


exports.getCharacters=(req, res)=>{
    return getCharacters()
    .then((characters)=>{
        res.status(200).send({characters})
    })
    .catch((err)=>{
        return err
    })
}