//const mysql = require('mysql');
import mysql from 'mysql';
import util from 'util';

//definition BDD
const connect = mysql.createPool({
    connectionLimit:5,
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce',
});
//connection BDD
connect.getConnection((err : Error) => {
    if (err) throw err;
    console.log('connected!');
});
//export de la connection
export{connect};
