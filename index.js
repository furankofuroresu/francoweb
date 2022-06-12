const http = require("http")
const port = 3000

const server = http.createServer(function(req, res){
    res.write("Hola Mi conejillo de indias")
    res.end()
}) 

server.listen(port, function(error){
    if (error) {
        console.log(" No funciono :s", error)
    } else {
        console.log(" Basicamente funciono " + port)
    }
})
