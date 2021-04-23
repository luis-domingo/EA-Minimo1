"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
//nombre, apellidos, fecha de nacimiento, profesión, vacuna aplicada
var schema = new mongoose_1.Schema({
    nombre: String,
    apellidos: String,
    fechanacimiento: String,
    profesion: String,
    vacuna: String
});
exports.default = mongoose_1.model('User', schema);
