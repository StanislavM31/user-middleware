require('dotenv').config();

const {app} = require('./src/app.js');

const port = process.env.PORT;



app.listen(port, ()=>{
    console.log("Сервер запущен. Порт 3001");
})