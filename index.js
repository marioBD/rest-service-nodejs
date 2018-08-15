'use strict'


const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')



let firstConnectTimeout = null;
const databaseUri=config.db

const mongoConnect = () => {
		console.log(`Database uri:${databaseUri}`)
    const mongoDB = mongoose.connect(databaseUri, {
        useMongoClient: true
    });

    mongoDB
        .then((db) => {
            clearTimeout(firstConnectTimeout);

						app.listen(config.port, () => {
							console.log(`API Rest corriendo en http://localhost:${config.port}`)
						})

        })



        .catch((err) => {
            firstConnectTimeout = setTimeout(mongoConnect, 5000);
        });
};

mongoConnect();
