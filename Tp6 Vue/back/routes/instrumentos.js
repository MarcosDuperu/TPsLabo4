const express = require("express");
const router = express.Router();
const Instrumento = require("../models/Instrumento");

//Listar
router.get("/", (req, res) => {
  Instrumento.findAll().then((instrumento) => {
    res.json(instrumento);
  });
});

//crear
router.post("/", (req, res) => {
  Instrumento.create({
    id: req.body.id,
    instrumento: req.body.instrumento,
    marca: req.body.marca,
    modelo: req.body.modelo,
    imagen: req.body.imagen,
    precio: req.body.precio,
    costoEnvio: req.body.costoEnvio,
    cantidadVendida: req.body.cantidadVendida,
    descripcion: req.body.descripcion,
  })
    .then((instrumento) => {
      res.json(instrumento);
    })
    .catch((error) => console.log(error));
});

//get id
router.get("/:id", (req, res) => {
  Instrumento.findByPk(req.params.id).then((instrumento) => {
    res.json(instrumento);
  });
});

//Update
router.put("/:id", (req, res) => {
  Instrumento.update(
    {
      instrumento: req.body.instrumento,
      marca: req.body.marca,
      modelo: req.body.modelo,
      imagen: req.body.imagen,
      precio: req.body.precio,
      costoEnvio: req.body.costoEnvio,
      cantidadVendida: req.body.cantidadVendida,
      descripcion: req.body.descripcion,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((result) => {
    res.json(result);
  });
});

//delete
router.delete("/id", (req, res) => {
  Instrumento.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
