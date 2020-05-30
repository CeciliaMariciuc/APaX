var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var CarController = require('./Controller/CarController');

function handleRequest(request, response, next) {

    console.log('request ', request.url);
    var carController = new CarController();
    var filePath = '.' + request.url;
    if (filePath.includes("api")) {
        console.log('Request Type: ' +
            request.method + ' Endpoint: ' +
            filePath);
        if (filePath == './api/cars' && request.method === 'GET') {
            carController.getAll(request, response);
        }
        if (filePath == './api/cars/one' && request.method === 'GET') {
            carController.getOne(request, response);
        }
        if (filePath.includes('./api/cars/id/') && request.method === 'GET') {
            const words = filePath.split('/');
            carController.getById(request, response, words[4]);
        }
        if (filePath == './api/cars' && request.method === 'POST') {
            carController.insert(request, response);
        }
        if (filePath.includes('./api/cars') && request.method === 'PUT') {
            const words = filePath.split('/');
            carController.update(request, response, words[3]);
        }
        if (filePath.includes('./api/cars') && request.method === 'DELETE') {
            const words = filePath.split('/');
            carController.delete(request, response, words[3]);
        }
    } else {
        if (filePath == './') {
            filePath = './Interfata/index.html';
        }
        if (filePath == './statistici') {
            filePath = './Interfata/statistici.html'
        }
        if (filePath == './harta') {
            filePath = './Interfata/harta.html'
        }
        if (filePath == './despre') {
            filePath = './Interfata/despre.html'
        }

        //codul de mai jos -> preluat de pe https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework
        var extname = String(path.extname(filePath)).toLowerCase();
        var mimeTypes = {
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

        var contentType = mimeTypes[extname] || 'application/octet-stream';


        fs.readFile(filePath, function(error, content) {
            if (error) {
                if (error.code == 'ENOENT') {
                    fs.readFile('./404.html', function(error, content) {
                        response.writeHead(404, { 'Content-Type': 'text/html' });
                        response.end(content, 'utf-8');
                    });
                } else {
                    response.writeHead(500);
                    response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                }
            } else {
                response.setHeader('Access-Control-Allow-Origin', '*');
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            }
        });
    }
}

module.exports = { handleRequest }