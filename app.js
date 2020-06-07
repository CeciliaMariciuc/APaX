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
        //endpoints for 2015 
        if (filePath == './api/2015' && request.method === 'GET') {
            carController.getAll(request, response, '2015');
        }
        if (filePath == './api/2015/one' && request.method === 'GET') {
            carController.getOne(request, response, '2015');
        }
        if (filePath.includes('./api/2015/id/') && request.method === 'GET') {
            const words = filePath.split('/');
            carController.getById(request, response, '2015', words[4]);
        }
        if (filePath.includes('./api/2015/filter') && request.method === 'GET') {
            carController.getFiltered(request, response, '2015');
        }
        if (filePath.includes('./api/2015/sum') && request.method === 'GET') {
            carController.getSum(request, response, '2015');
        }
        if (filePath == './api/2015' && request.method === 'POST') {
            carController.insert(request, response, '2015');
        }
        if (filePath.includes('./api/2015') && request.method === 'PUT') {
            const words = filePath.split('/');
            carController.update(request, response, '2015', words[3]);
        }
        if (filePath.includes('./api/2015') && request.method === 'DELETE') {
            const words = filePath.split('/');
            carController.delete(request, response, '2015', words[3]);
        }
        //endpoints for 2016
        if (filePath == './api/2016' && request.method === 'GET') {
            carController.getAll(request, response, '2016');
        }
        if (filePath == './api/2016/one' && request.method === 'GET') {
            carController.getOne(request, response, '2016');
        }
        if (filePath.includes('./api/2016/id/') && request.method === 'GET') {
            const words = filePath.split('/');
            carController.getById(request, response, '2016', words[4]);
        }
        if (filePath.includes('./api/2016/filter') && request.method === 'GET') {
            carController.getFiltered(request, response, '2016');
        }
        if (filePath.includes('./api/2016/sum') && request.method === 'GET') {
            carController.getSum(request, response, '2016');
        }
        if (filePath == './api/2016' && request.method === 'POST') {
            carController.insert(request, response, '2016');
        }
        if (filePath.includes('./api/2016') && request.method === 'PUT') {
            const words = filePath.split('/');
            carController.update(request, response, '2016', words[3]);
        }
        if (filePath.includes('./api/2016') && request.method === 'DELETE') {
            const words = filePath.split('/');
            carController.delete(request, response, '2016', words[3]);
        }

        //endpoints for 2017
        if (filePath == './api/2017' && request.method === 'GET') {
            carController.getAll(request, response, '2017');
        }
        if (filePath == './api/2017/one' && request.method === 'GET') {
            carController.getOne(request, response, '2017');
        }
        if (filePath.includes('./api/2017/id/') && request.method === 'GET') {
            const words = filePath.split('/');
            carController.getById(request, response, '2017', words[4]);
        }
        if (filePath.includes('./api/2017/filter') && request.method === 'GET') {
            carController.getFiltered(request, response, '2017');
        }
        if (filePath.includes('./api/2017/sum') && request.method === 'GET') {
            carController.getSum(request, response, '2017');
        }
        if (filePath == './api/2017' && request.method === 'POST') {
            carController.insert(request, response, '2017');
        }
        if (filePath.includes('./api/2017') && request.method === 'PUT') {
            const words = filePath.split('/');
            carController.update(request, response, '2017', words[3]);
        }
        if (filePath.includes('./api/2017') && request.method === 'DELETE') {
            const words = filePath.split('/');
            carController.delete(request, response, '2017', words[3]);
        }

        //endpoints for 2018
        if (filePath == './api/2018' && request.method === 'GET') {
            carController.getAll(request, response, '2018');
        }
        if (filePath == './api/2018/one' && request.method === 'GET') {
            carController.getOne(request, response, '2018');
        }
        if (filePath.includes('./api/2018/id/') && request.method === 'GET') {
            const words = filePath.split('/');
            carController.getById(request, response, '2018', words[4]);
        }
        if (filePath.includes('./api/2018/filter') && request.method === 'GET') {
            carController.getFiltered(request, response, '2018');
        }
        if (filePath.includes('./api/2018/sum') && request.method === 'GET') {
            carController.getSum(request, response, '2018');
        }
        if (filePath == './api/2018' && request.method === 'POST') {
            carController.insert(request, response, '2018');
        }
        if (filePath.includes('./api/2018') && request.method === 'PUT') {
            const words = filePath.split('/');
            carController.update(request, response, '2018', words[3]);
        }
        if (filePath.includes('./api/2018') && request.method === 'DELETE') {
            const words = filePath.split('/');
            carController.delete(request, response, '2018', words[3]);
        }

        //endpoints for 2019
        if (filePath == './api/2019' && request.method === 'GET') {
            carController.getAll(request, response, '2019');
        }
        if (filePath == './api/2019/one' && request.method === 'GET') {
            carController.getOne(request, response, '2019');
        }
        if (filePath.includes('./api/2019/id/') && request.method === 'GET') {
            const words = filePath.split('/');
            carController.getById(request, response, '2019', words[4]);
        }
        if (filePath.includes('./api/2019/filter') && request.method === 'GET') {
            carController.getFiltered(request, response, '2019');
        }
        if (filePath.includes('./api/2019/sum') && request.method === 'GET') {
            carController.getSum(request, response, '2019');
        }
        if (filePath == './api/2019' && request.method === 'POST') {
            carController.insert(request, response, '2019');
        }
        if (filePath.includes('./api/2019') && request.method === 'PUT') {
            const words = filePath.split('/');
            carController.update(request, response, '2019', words[3]);
        }
        if (filePath.includes('./api/2019') && request.method === 'DELETE') {
            const words = filePath.split('/');
            carController.delete(request, response, '2019', words[3]);
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
        if (filePath == './vizualizare') {
            filePath = './Interfata/vizualizare.html'
        }
        if (filePath == './ajutor') {
            filePath = './Interfata/ajutor.html'
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