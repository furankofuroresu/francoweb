const http = require("http")
const fs = require(`fs`)
const port = 3000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.Html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write("Hola Mi conejillo de indias")
        } else {
            res.write(data)
        }
        res.end()
    })
})
server.listen(port, function (error) {
    if (error) {
        console.log(" No funciono :s", error)
    } else {
        console.log(" Basicamente funciono " + port)
    }
}
)