let conn = require('./db');
let path = require('path');
const { save } = require('./reservations');

module.exports = {
    getMenus(){

        return new Promise((resolve, reject) => {

            conn.query(`
                SELECT * FROM tb_menus ORDER BY title
            `, (err, results)=> {

                 if(err){
                     reject(err);
                }

                resolve(results);

            });
  
        });

    },

    save(fields, files){

        return new Promise((resolve, reject)=>{

            conn.query(`
            INSERT INTO tb_menus (title, description, price, photo)
            VALOES(?, ?, ?, ?)
            `,[
                fields.title,
                fields.description,
                fields.price,
                `images/${files.photo.name}`            
            ], (err, results)=>{

                if(err){
                    reject(err);
                } else {

                    resolve(results);
                    
                }

            });

        });
    }


};