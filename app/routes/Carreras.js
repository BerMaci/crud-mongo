const express = require('express');
const router = express.Router();
const { verCarreras, verCarreraId, agregarCarrera, editarCarrera, borrarCarrera } = require('../controller/controller');
const {check, validationResult, body} = require("express-validator")
const { validarId } = require('../middleware/validarId');


router.get('/ver', verCarreras);
router.get('/ver/:id',validarId, verCarreraId);
router.post('/crear', [
    check("area").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("carrera").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("duracion").not().isEmpty().withMessage("campo vacio").isLength({max: 3, min: 1}),
    check("titulo").not().isEmpty().withMessage("campo vacio").isLength({max: 50, min: 4}),
    check("cursada").not().isEmpty().withMessage("campo vacio").isLength({max: 30, min: 4}),
    check("precio").not().isEmpty().withMessage("campo vacio").isLength({max: 4, min: 1}),
], agregarCarrera);
router.put("/editar/:id", validarId,[
    check("area").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("carrera").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("duracion").not().isEmpty().withMessage("campo vacio").isLength({max: 3, min: 1}),
    check("titulo").not().isEmpty().withMessage("campo vacio").isLength({max: 50, min: 4}),
    check("cursada").not().isEmpty().withMessage("campo vacio").isLength({max: 30, min: 4}),
    check("precio").not().isEmpty().withMessage("campo vacio").isLength({max: 4, min: 1}),
    ], editarCarrera)
router.delete("/borrar/:id", borrarCarrera)


module.exports = router;
