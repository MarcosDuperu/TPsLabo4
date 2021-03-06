"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rutas_1 = __importDefault(require("./rutas"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(rutas_1.default);
app.listen(3000, () => {
    console.log(`Servidor en puerto 3000`, 3000);
});
const path = require("path");
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
});
