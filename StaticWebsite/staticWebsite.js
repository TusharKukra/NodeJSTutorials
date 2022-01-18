const http = require('http')
const url = require('url');
const fs = require('fs');

// create a server
http.createServer((request,response)=>{

    /* requests: */
    // index
    // about
    // services

    const path = request.url;

    /** ABOUT Page */
    if(path == '/about'){
        console.log("About Page.");

        // binding the about.html page in server using FileSystem
        response.writeHead(200,{
            'content-type':'text/html'
        })

        const fileContentAbout = fs.readFileSync("./StaticWebsite/views/about.html");
        response.write(fileContentAbout);
        response.end();
    }


    /** HOME Page */
    else if(path == '/'){
        console.log("Home Page.");

        // bind the home.html code here:
        response.writeHead(200,{
            'content-type' : 'text/html'
        })

        const fileContentHome = fs.readFileSync("./StaticWebsite/views/home.html");

        // we are using readFileSync here bcoz first it will read the whole content and then written the data using write
        response.write(fileContentHome);

        // now end the response
        response.end();
    }

    else if(path == '/services'){
        console.log("Services Page.");

        response.writeHead(200,{
            'content-type' : 'text/html'
        })

        const fileContentServices = fs.readFileSync("./StaticWebsite/views/services.html");
        response.write(fileContentServices);
        response.end();
    }


}).listen(1999)