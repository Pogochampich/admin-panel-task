const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser');

const app = express()

const sequelize = require('./lib/db.js');
const userRouter = require('./routes/userroutes.js');

async function start() {
    try {
        // Запуск сервера
        app.listen(process.env.PORT, () => console.log(`Server has been started on port ${process.env.PORT}`))
        app.use(bodyParser.json());
        app.use('/user', userRouter);

        // Подключение к БД
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
         


    } catch (error) {
        console.log(`Unable to start server on port: ${process.env.PORT}`, error)
    }

}

start()