"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
//incluir las rutas que necesitemos
var user_routes_1 = __importDefault(require("./routes/user_routes"));
//generamos la app
var app = express_1.default();
//middleware
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
//parametros
app.set('PORT', process.env.PORT || 8080);
//routes -- IMPORTANTE
app.use('/api', user_routes_1.default);
exports.default = app;
