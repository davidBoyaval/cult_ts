"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const mysql = require('mysql');
const mysql_1 = __importDefault(require("mysql"));
//definition BDD
const connect = mysql_1.default.createPool({
    connectionLimit: 5,
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce',
});
exports.connect = connect;
//connection BDD
connect.getConnection((err) => {
    if (err)
        throw err;
    console.log('connected!');
});
