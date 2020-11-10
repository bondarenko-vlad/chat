const express = require('express') // подключение экпресса, он делает из node приложение - web приложение
const app = express()
const server = require('http').Server(app) // создае http и его сервером будет app
const io =require('socket.io')(server)


const rooms =new Map() // МАР это навороченный объект, у него есть много дополнительных методов.

app.get('/rooms', (req, res) => { // по гет запросу users должно что-то произойти
    // rooms.set('hello', [])
    res.json(rooms) // если нет ответа приложения, то браузер будет в таймауте. 
})


io.on('connection', (socket) => {
    console.log('user connected');
})


// app.use(function(req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
// })

server.listen(9999, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log('server is started');
}) // слушать порт, вторым агрументом можно передать функцию, она выполниться сразу после запуска сервера
