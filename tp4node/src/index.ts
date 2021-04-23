import express from "express";
import rutas from "./rutas";
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(rutas);

app.listen(3000, () => {
  console.log(`Servidor en puerto 3000`, 3000);
});

