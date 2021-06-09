const express = require("express");
const app = express();
const sequelize = require("./database/db");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/instrumento", require("./routes/instrumentos"));

app.listen(PORT, () => {
  console.log(`App levantada puerto ${PORT}`);
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("BD conectada");
    })
    .catch((error) => console.log(error));
});
