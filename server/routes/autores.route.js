const express = require("express");
const AutorController = require("../controllers/autores.controller");
const AutorRouter = express.Router();

AutorRouter.get("/",  AutorController.getAllAutors);

AutorRouter.get("/:id", AutorController.getOneAutor);

AutorRouter.post("/new", AutorController.createAutor);

AutorRouter.put("/:id", AutorController.updateOneAutorById);

AutorRouter.delete("/:id", AutorController.deleteOneAutorById);

module.exports = AutorRouter;