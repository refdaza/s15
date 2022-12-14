// con express.js

// const express = require('express')

// const app = express()
// const port = 1000

// app.get('/', (req, res)=>{
//     const a = 1
//     const b = 3
//     const suma = a+b
//     res.send(`Suma de ${a} + ${b} = ${suma}`)
// })

// app.listen(port,()=> {
//     console.log(`El servidor de esta corriendo en http://localhost:${port}`);
// })

// con http
const http = require('http')
const hostname = '127.0.0.5'
const port = 2000
const server = http.createServer((req, res)=> {
    res.setHeader('Content-type', 'text/plain')
    res.statusCode = 200;
    const nombre = 'Refaim'
    const apellido = 'Daza'
    res.end(`El nombre del usuario es: ${nombre} ${apellido}`)
})

server.listen(port, hostname, ()=>{
    console.log(`El servidor esta en el puerto http://${hostname}:${port}`);
})

