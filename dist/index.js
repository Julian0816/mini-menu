"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); // In typeScript we do not use this format --> const express = require('express') <-- but the one shown in line 1
var app = (0, express_1.default)();
//Endpoints
var home_1 = __importDefault(require("./routes/home"));
app.use('/', home_1.default);
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("App listening on PORT ".concat(port)); });
