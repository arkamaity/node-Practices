module.exports.apiHandler = function(request,response){
    console.log(`_________________Start apiHandler___________`);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Api Handler</h1>');
    console.log(`_________________End apiHandler___________`);
};

