const mysql = require('mysql');

const config = {
    host: 'wm1702.com',
    user: 'c21_wm1702',
    password: 'dkEWNnZYp1n',
    database: 'c21_wm1702',
};

//const pool = mysql.createPool(config);

const conexion = mysql.createConnection(config);

conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

module.exports = conexion;

 	
