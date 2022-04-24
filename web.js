const apiApp =  require('./apps/API/api.js');

module.exports.webConfig = [
    {
        appId : 1,
        appName : "Api",
        appPathName : "/api/",
        appMainController : apiApp.apiHandler,
    },
    {
        appId : 2,
        appName : "test",
        appPathName : "/test/",
        appMainController : apiApp.apiHandler,
    }
];

module.exports.defaultController = function(request,response){
    console.log(`-----------------Start defaultController-----------------`);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Default Controllers</h1>');
    console.log(`-----------------End defaultController -----------------`);
};
