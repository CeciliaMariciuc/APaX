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

    getOne(request, response, collection) {
        this.carRepository.findOne(collection).then((data) => {
            //console.log(data);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getById(request, response, collection, id) {
        this.carRepository.findById(collection, id).then((data) => {
            //console.log(data);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getAll(request, response, collection) {
        this.carRepository.findAll(collection).then((data) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getFiltered(request, response, collection) {
        var stringQuery = new FilterEntry(request.url);
        var query = stringQuery.getQuery();
        this.carRepository.findFiltered(collection, query).then((data) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    getSum(request, response, collection) {
        var stringQuery = new FilterEntry(request.url);
        var query = stringQuery.getQuery();
        this.carRepository.sumTotal(collection, query).then((data) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
        }).catch((error) => {
            console.log("Error:" + error);
        });
    }

    insert(request, response, collection) {
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
            self.carRepository.insertOne(collection, postBody);
            response.statusCode = 201;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(result));
        });
    }

    update(request, response, collection, id) {
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
            self.carRepository.updateOne(collection, putBody, id);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(result));
        });
    }

    delete(request, response, collection, id) {
        var result = {
            "raspuns": "Datele au fost sterse."
        }
        this.carRepository.deleteOne(collection, id);
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(result));

    }
}

module.exports = CarController;