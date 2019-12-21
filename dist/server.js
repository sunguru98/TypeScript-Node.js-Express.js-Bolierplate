"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 8000;
app.get('/', function (_, res) {
    res.send('Hello world');
});
app.listen(PORT, function () { return console.log("Server Running on PORT " + PORT); });
