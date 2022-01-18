// For importing any Module in NodeJS use: require("moduleName")

const http = require("http");

// Importing custommodule here:
const c = require("./custommodule")

const avg = c(1,2,3);
console.log("Average is: "+avg);

const server = http.createServer((request, response) => {
    // When we create a Arrow fxn we need two parameters (request, response)
    // request : to process the Request (process the data which is coming)
    // response : to send the response (eg. what to send as a response: send error msg, any textj etc)

    // Now to write anything, we have to tell it (using writeHead(statusCode, object:ContentType))
    response.writeHead(200, {"content-type" : "text/html"});

    // now for writing
    response.write("<h1>This is HTTP Server</h1>");
    response.write("<button>Click Here !</button>");

    // now to end writing : (no more data will be written to the Writable)
    response.end("<br>Ending....");

    //response.write("<button>Click Here !</button>");
});

server.listen(1519);