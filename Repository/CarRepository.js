"use strict";
var MongoDao = require('./mongodao');
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

class CarRepository {

    constructor() {
        this.db = MongoDao.getDb();
    }

    findOne(collection) {
        try {
            var db = MongoDao.getDb();
            var promise = new Promise((resolve, reject) => {
                db.collection(collection).findOne({}, (err, item) => {
                    err
                        ?
                        reject(err) :
                        resolve(item);

                });

            }).then(result => {
                return result;
            });

            return promise;
        } catch (err) {
            console.log(err);
        }
    }

    findById(collection, id) {
        try {
            var db = MongoDao.getDb();
            var promise = new Promise((resolve, reject) => {
                db.collection(collection).findOne({ _id: new ObjectId(id) }, (err, item) => {
                    err
                        ?
                        reject(err) :
                        resolve(item);

                });
            }).then(result => {
                return result;
            });

            return promise;
        } catch (err) {
            console.log(err);
        }
    }

    findAll(collection) {
        try {
            var db = MongoDao.getDb();
            var collection = db.collection('cars');
            var promise = new Promise((resolve, reject) => {
                db.collection(collection).find({}).toArray((err, items) => {
                    err
                        ?
                        reject(err) :
                        resolve(items);

                });
            }).then(result => {
                return result;
            });

            return promise;
            /* var currentBatch = [];
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
             }*/
        } catch (err) {
            console.log(err);
        }
    }

    findFiltered(collection, filters) {
        try {
            var db = MongoDao.getDb();
            var collection = db.collection('cars');
            var promise = new Promise((resolve, reject) => {
                var json = '{ "JUDET": "VASLUI", "CATEGORIE_COMUNITARA": "M3  " }';
                var obj = JSON.parse(json);
                db.collection(collection).find(filters).toArray((err, items) => {
                    err
                        ?
                        reject(err) :
                        resolve(items);

                });
            }).then(result => {
                return result;
            });

            return promise;
        } catch (err) {
            console.log(err);
        }
    }

    insertOne(collection, car) {
        try {
            //var db = MongoDao.getDb();
            this.db.collection(collection).insertOne(car, (err, result) => {})
        } catch (err) {
            console.log(err);
        }
    }

    updateOne(collection, car, id) {
        try {
            //var db = MongoDao.getDb();
            this.db.collection(collection).updateOne({ _id: new ObjectId(id) }, { $set: car }, (err, result) => {})
        } catch (err) {
            console.log(err);
        }
    }

    deleteOne(collection, id) {
        try {
            this.db.collection(collection).deleteOne({ _id: new ObjectId(id) }, (err, result) => {})
        } catch (err) {
            console.log(err);
        }
    }
    sumTotal(collection, query) {
        try {
            var promise = new Promise((resolve, reject) => {
                var suma = 0;
                this.db.collection(collection).aggregate(
                    [{
                            $match: query
                        },
                        { $group: { _id: null, "sum": { "$sum": "$TOTAL_VEHICULE" } } }
                    ],
                    function(err, res) {
                        console.log(res);
                        resolve(res[0].sum);
                    }
                )
            }).then(result => {
                return result;
            });
            return promise;
            /*
                        var ct = 0;
                        var promise = new Promise((resolve, reject) => {
                            var suma = 0;
                            var cursor = this.db.collection('cars').find({ "MARCA": "DAC" }).project({});

                            function processItem(err, item) {
                                if (item === null || item == undefined) {
                                    resolve(suma);
                                    return;
                                } else {
                                    if (item != undefined)
                                        if (item["TOTAL_VEHICULE"]) { suma = suma + item["TOTAL_VEHICULE"]; }
                                    cursor.next(processItem); // continue looping
                                }
                                console.log(suma);
                            }
                            cursor.count(function(err, count) {
                                console.log('resultCursor size=' + count);
                                cursor.next(processItem); // Start of the loop
                                //resolve(count);
                            });
                        }).then(result => {
                            return result;
                        });
                        return promise;
                        */
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = CarRepository;