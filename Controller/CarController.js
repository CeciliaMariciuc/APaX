"use strict"
var url = require('url');
const assert = require('assert');
var MongoDao = require('../Repository/mongodao');
var CarRepository = require('../Repository/CarRepository')
var FilterEntry = require('./FilterEntry')

class CarController {
    constructor() {
        this.carRepository = new CarRepository();
    }

    getOne(request, response) {
        this.carRepository.findOne().then((data) => {
            //console.log(data);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getById(request, response, id) {
        this.carRepository.findById(id).then((data) => {
            //console.log(data);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getAll(request, response) {
        this.carRepository.findAll().then((data) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getFiltered(request, response) {
        var stringQuery = new FilterEntry(request.url);
        var query = stringQuery.getQuery();
        this.carRepository.findFiltered(query).then((data) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getSum(request, response) {
        var stringQuery = new FilterEntry(request.url);
        var query = stringQuery.getQuery();
        this.carRepository.sumTotal(query).then((data) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    insert(request, response) {
        var body = '';
        var self = this;
        request.on('data', function(chunk) {
            body += chunk;

        });
        request.on('end', function() {
            var postBody = JSON.parse(body);
            var result = {
                "raspuns": "Date inserate:  " + JSON.stringify(postBody)
            };
            //console.log(postBody);
            self.carRepository.insertOne(postBody);
            response.statusCode = 201;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(result));
        });
    }

    update(request, response, id) {
        var body = '';
        var self = this;
        request.on('data', function(chunk) {
            body += chunk;

        });
        request.on('end', function() {
            var putBody = JSON.parse(body);
            var result = {
                "raspuns": "Date actualizate:  " + JSON.stringify(putBody)
            };
            self.carRepository.updateOne(putBody, id);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(result));
        });
    }

    delete(request, response, id) {
        var result = {
            "raspuns": "Datele au fost sterse."
        }
        this.carRepository.deleteOne(id);
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(result));

    }
}

module.exports = CarController;