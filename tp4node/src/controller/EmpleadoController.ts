import { Request, Response } from "express";
import { cxMysql } from "../mysqldb";

export const getEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        alert("Error al buscar los empleados");
        return;
      }
      console.log("Conexion con MySQL: ", connection.threadId);
      connection.query("SELECT * FROM empleado limit 10", (err, results) => {
        if (err) console.error(err);
        res.send(results);
      });
    });
  });

export const getEmpleadoById = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const idEmp = parseInt(req.params.id);
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        res.send(err);
        alert("Error no se encontro el empleado");
        return;
      }
      connection.query(
        "SELECT * FROM empleado WHERE legajo = ?",
        [idEmp],
        (err, results) => {
          if (err) console.error(err);
          results.send(results);
        }
      );
    });
  });

export const cargarEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const {
      legajo,
      apellido,
      nombre,
      dni,
      sector,
      fechaIngreso,
      activo,
    } = req.body;
    var value = [legajo, apellido, nombre, dni, sector, fechaIngreso, activo];
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        alert("Error al cargar Empleado");
        res.send(err);
        return;
      } else {
        let sql: string =
          "INSERT INTO empleado(legajo, apellido, nombre, dni, sector, fecha_ingreso, activo) VALUES (?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, value, (err, results) => {
          if (err) {
            console.error(err);
            res.json({ message: "Error al tratar de cargar" });
          } else {
            res.json({ message: "Empleado gargado con exito" });
          }
        });
      }
    });
  });

export const actualizarEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const {
      legajo,
      apellido,
      nombre,
      dni,
      sector,
      fechaIngreso,
      activo,
    } = req.body;
    var values = [legajo, apellido, nombre, dni, sector, fechaIngreso, activo];
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        alert("Error al conectarse con BD");
        res.send(err);
      } else {
        let sql: string =
          "UPDATE empleado SET apellido=?, nombre=?, dni=?, sector=?, fecha_ingreso=?, activo=? WHERE legajo=?";
        connection.query(sql, values, (err, results) => {
          if (err) {
            console.error(err);
            res.json({ message: "Error al actualizar " + err });
          } else {
            res.json({ message: "Empleado actualizado con exito" });
          }
        });
      }
    });
  });

export const eliminarEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const legajo = parseInt(req.params.legajo);
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        res.send(err);
        return;
      }
      connection.query(
        "DELETE FROM empleado WHERE legajo = ?",
        [legajo],
        (err, results) => {
          if (err) {
            console.error(err);
            res.json({ message: "Error al eliminar" });
          } else {
            res.json({ message: "Empleado eliminado con exito" });
          }
        }
      );
    });
  });
