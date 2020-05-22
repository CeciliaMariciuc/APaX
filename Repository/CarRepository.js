"use strict";
var MongoDao = require('./mongodao');
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

class CarRepository {

    constructor() {}

    findOne() {
        MongoDao.connectToServer(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                //de modificat....
                var db = MongoDao.getDb();
                db.collection('cars').findOne({}, (err, item) => {
                    return item;
                });
                MongoDao.disconnect();
            }
        });
    }

    findById(id) {
        MongoDao.connectToServer(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                var db = MongoDao.getDb();
                db.collection('cars').findOne({ _id: new ObjectId(id) }, (err, item) => {
                    console.log(item)
                });
                MongoDao.disconnect();
            }
        });
    }

    findAll() {
        MongoDao.connectToServer(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                var db = MongoDao.getDb();
                var collection = db.collection('cars');
                var currentBatch = [];
                var batchSize = 1000;
                var cursor = collection.find({});
                cursor.next(process);

                function process(err, doc) {
                    var hasMore = (doc !== null) ? true : false;
                    console.log(currentBatch);
                    if (doc === null) {
                        if (currentBatch.length > 0) {
                            processBatch(hasMore);
                        }
                        console.log('Finished processing documents');
                        return;
                    } else {
                        setTimeout(function() {
                            currentBatch.push(doc);
                            if (currentBatch.length % batchSize == 0) {
                                processBatch(hasMore);
                            } else if (hasMore) {
                                cursor.next(process);
                            } else {
                                MongoDao.disconnect();
                                return;
                            }
                        });
                    }
                }
                MongoDao.disconnect();
            }
        });
    }
}

module.exports = CarRepository;