require('dotenv').config()

const app = require('./app');
const {configApp,db}= require('./config');
const conexion=require('./db/database');

const port=configApp.port;

async function initApp() {
    try {
        app.listen(configApp.port, () => console.log('listen on', configApp.port));

       await conexion(db.user, db.pass, db.dbname);
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}


initApp();