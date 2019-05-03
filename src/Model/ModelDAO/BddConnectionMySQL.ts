//const mysql = require('mysql');
//const mysql=require('mysql');
import mysql from 'mysql';
import util from 'util';


    const connect = mysql.createPool({
        connectionLimit:5,
        multipleStatements: true,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ecommerce',
});

connect.getConnection((err : Error) => {
    if (err) throw err;
    console.log('connected!');
});

export{connect};
