"use strict"
const assert = require('assert');
var MongoDao = require('../Repository/mongodao');
var CarRepository = require('../Repository/CarRepository')

class CarController {
    constructor() {
        this.carRepository = new CarRepository();
    }

    async getOne(request, response) {
        var v = {
            "text": "???? "
        };
        var result = await this.carRepository.findOne();
        console.log(result);
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(v));
    }

    getById(id) {
        this.carRepository.findById(id);
    }

    getAll() {
        this.carRepository.findAll();
    }
}

module.exports = CarController;

var carController = new CarController();
//carController.findById('5eba833b2a0d784e18d244b3');
//carController.findAll();