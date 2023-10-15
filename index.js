// import json-server in index.js file
const jsonServer = require('json-server')

// create a server for mediaplayer app
const mediaPlayerServer = jsonServer.create()

// set up the patg/route from json file
 const router = jsonServer.router("db.json")

// returns middlewares used by json server
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.port

// use miidleware and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

// to listen server fro resolving request from client
mediaPlayerServer.listen(port,()=>{      
    console.log(`media player server started at port ${port}, and waiting for client request!!!`);
})