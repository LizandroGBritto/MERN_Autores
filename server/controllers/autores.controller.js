const {AutorModel} = require('../models/autores.model');

module.exports = {
    getAllAutors: (req, res) => {
        AutorModel.find({})
        .then (allAutors => res.status(200).json({autor: allAutors}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    getOneAutor: (req, res) => {
        AutorModel.findOne({_id: req.params.id})
        .then(oneSingleAutor => res.status(200).json({autor: oneSingleAutor}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    createAutor: (req, res) => {
        AutorModel.create(req.body)
        .then(newlyCreatedAutor => res.status(201).json({autor: newlyCreatedAutor}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    updateOneAutorById: (req, res) => {
        AutorModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedAutor => res.status(200).json({autor: updatedAutor}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    deleteOneAutorById: (req, res) => {
        AutorModel.deleteOne({_id: req.params.id})
        .then(result => res.status(200).json({result: result}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    }


}