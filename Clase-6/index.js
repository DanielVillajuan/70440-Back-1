import http from 'node:http'

const server = http.createServer((request, response)=>{
    response.end('Hola esto fue enviado desde el servidor')
})

server.listen(8080, () => {
    console.log('Servidor levantado')
})
