
 const express = require("express")
 require("dotenv").config()

// Import package
const http = require("http")

const app = express()

// create server
const httpServer = http.createServer(app)

const port = process.env.PORT 

httpServer.listen(port, ()=>{
    console.log("Server Started", port)
})