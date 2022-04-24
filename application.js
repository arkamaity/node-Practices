const http = require('http');
const url = require('url');
require('dotenv').config();

const config = require('./web.js');

const port = process.env.APP_SERVER_PORT;
const host = process.env.APP_SERVER_HOST;
const applicationServerUrl = `http://${host}:${port}`;
const applicationServerlogFilePath = process.env.APP_SERVER_LOG_FILE_PATH;

function serverRouter(request,response){
  console.log(`Executing serverRouter`);
  var myURL = new URL(`http://${host}:${port}${request.url}`);
  
  console.log(`**processing request url ${request.url}`);
  var serverRouterList = config.webConfig;
  
  console.log(`** Finding Server Router`);
  var serverRouter = serverRouterList.find(element => request.url.startsWith(element.appPathName));
  
  if(serverRouter === undefined){
    
    console.log(`** Server Router is undefined`);
    config.defaultController(request,response);
  
  }else{
    
    console.log(`** Server Router is not undefined ${serverRouter.appId}`);
    serverRouter.appMainController(request,response);
    
  }
};

const applicationServer = http.createServer(serverRouter);

applicationServer.listen(port,host,function(){
  console.log(`Server running at http://${process.env.APP_SERVER_HOST}:${process.env.APP_SERVER_PORT}/`);
});

/*var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

/*const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  var myURL = new URL(`http://${process.env.APP_SERVER_HOST}:${process.env.APP_SERVER_PORT}${req.url}`);
  console.log(`req.url : ${req.url}`);
  console.log(`myURL : ${myURL.pathname}`);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});*/

/*server.listen(process.env.APP_SERVER_PORT, process.env.APP_SERVER_HOST, function() {
  console.log(`Server running at http://${process.env.APP_SERVER_HOST}:${process.env.APP_SERVER_PORT}/`);
});*/