const { get5char } = require("../models/get5char.model")

exports.get5char=(req,res)=>{
    const {show_id, num} = req.params
    console.log(req.params)
    return get5char(show_id, num)
    .then((characters)=>{
        res.status(200).send({characters})
    })
    .catch((err)=>{
        return err
    })
}