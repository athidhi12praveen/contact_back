// steps to generate json server 

// import json server
const jsonServer=require('json-server')

// create our own server to run json file
const contactServer=jsonServer.create()

// generate a middleware to use in json server
const middleware=jsonServer.defaults()

// set up path for db.json
const router=jsonServer.router("db.json")

// set up port for server
const port=3000

// use middleware router in server
contactServer.use(middleware)
contactServer.use(router)

// server listen/run to request
contactServer.listen(port,()=>{
    console.log("Contact App started at port :"+port);
})