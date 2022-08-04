const res = require('express/lib/response');
const {
    Player
} = require("../models/carrera");
const {
    validationResult
} = require("express-validator");
const axios = require('axios');






const index = (req, res) => {
    res.render('index', {
        title: 'crud-mongo'
    });
}




const verCarrerass = async (req, res) => {
    const carreras = await Player.find()
    res.json({
        carreras
    })
}


const verCarreraId = async (req, res) => {
    const carrera = await Player.findById(req.params.id)
    res.json({carrera})
}


const agregarCarrera = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const {
                area
            } = req.body;
            const {
                carrera
            } = req.body;
            const {
                duracion
            } = req.body;
            const {
                titulo
            } = req.body;
            const {
                cursada
            } = req.body;
            const {
                precio
            } = req.body;
            const carrera = new Player({
                area,
                carrera,
                duracion,
                titulo,
                cursada,
                precio
            });
            await carrera.save();
            res.status(201).json({
                carrera,
                msg: 'carrera incluida'
            })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({
            msg: "Error al ingresar",
            err
        })
    }
}


const editarCarrera = async (req, res) => {
    const error = validationResult(req)
    if (error.isEmpty()) {
        const {id} = req.params
        const edicion = await Player.findByIdAndUpdate(id, req.body)
        res.status(202).json({name: req.body.name,edicion})
    } else {
        res.status(501).json(error)
    }


}


const borrarCarrera = async (req, res) => {
    try {
        const carrera = await Player.findByIdAndDelete(req.params.id);
        res.json({
            msg: "Se eliminó del detalle: ",
            carrera
        })
    } catch (error) {
        res.status(400).json({
            msg: "Problemas durante el proceso"
        })
    }
}




const consultaPeople = async(req, res) => {
    try {
        const respuesta = await axios.get("https://swapi.dev/api/people/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }
}


const consultaPlanets = async(req, res) => {
    try {
        const respuesta = await axios.get("https://swapi.dev/api/planets/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }
}


const consultaFilms = async(req, res) => {


    try {
        const respuesta = await axios.get("https://swapi.dev/api/films/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }
}


const consultaSpecies = async(req, res) => {


    try {
        const respuesta = await axios.get("https://swapi.dev/api/species/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }


}


const consultaVehicles = async(req, res) => {


    try {
        const respuesta = await axios.get("https://swapi.dev/api/vehicles/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data}) 
    }
}


const consultaStarShips = async(req, res) => {
    try {
        const respuesta = await axios.get("https://swapi.dev/api/starships/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data}) 
    }


}


module.exports = {
    index,
    agregarCarrera,
    verCarreras,
    verCarreraId,
    editarCarrera,
    borrarCarrera,
    consultaPeople,
    consultaPlanets,
    consultaFilms,
    consultaSpecies,
    consultaStarShips,
    consultaVehicles 
}
