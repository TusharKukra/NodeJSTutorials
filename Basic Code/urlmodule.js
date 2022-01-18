// First we create a server using HTTP module
const http = require('http');

// And on that server, we will parse the data using URL module
const url = require('url');


// using url.parse() function in the http server

http.createServer((request,response)=>{

    console.log(request.url);

    const urlObj = url.parse(request.url,true);
    console.log(urlObj);

    // url i enter: localhost:1515/tk?name=TK
    console.log(urlObj.query.name);

}).listen(1515);
