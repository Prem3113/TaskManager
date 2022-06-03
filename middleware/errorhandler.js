const errorhandler = (err,req,res,next) => {
    res.status(500).json({msg:`something broke, please try again later`})
}
module.exports = errorhandler