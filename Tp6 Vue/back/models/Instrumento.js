const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Instrumento extends Model {}

Instrumento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El Campo no puede ser nuelo",
        },
        isInt: {
          args: true,
          msg: "El valor debe ser un entero",
        },
      },
    },
    instrumento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El instrumento debe tener nombre",
        },
      },
    },
    marca: {
      type: DataTypes.STRING,
    },
    modelo: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El producto debe tener precio",
        },
        isFloat: {
          args: true,
          msg: "Debe ser un precio válido",
        },
      },
    },
    costoEnvio: DataTypes.STRING,
    cantidadVendida: DataTypes.INTEGER,
    descripcion: DataTypes.STRING(1000),
  },

  {
    sequelize,
    modelName: "instrumento",
  }
);

module.exports = Instrumento;
