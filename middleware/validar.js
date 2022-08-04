const {Player} = require("../models/carreras");


const validarId = async (req, res, next) => {
    const carrera = await Player.findById(req.params.id)
    if(carrera !== null) {
        next();
    } else {
        res.json({msg: "El id ingresado no es correcto"})
    }
}


module.exports = {validarId}
