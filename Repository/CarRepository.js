"use strict";
var MongoDao = require('./mongodao');
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

class CarRepository {

    constructor() {
        this.db = MongoDao.getDb();
    }

    findOne() {
        try {
            var db = MongoDao.getDb();
            var promise = new Promise((resolve, reject) => {
                db.collection('cars').findOne({}, (err, item) => {
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

    findById(id) {
        try {
            var db = MongoDao.getDb();
            var promise = new Promise((resolve, reject) => {
                db.collection('cars').findOne({ _id: new ObjectId(id) }, (err, item) => {
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

    findAll() {
        try {
            var db = MongoDao.getDb();
            var collection = db.collection('cars');
            var promise = new Promise((resolve, reject) => {
                db.collection('cars').find({}).toArray((err, items) => {
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

    insertOne(car) {
        try {
            //var db = MongoDao.getDb();
            this.db.collection('cars').insertOne(car, (err, result) => {})
        } catch (err) {
            console.log(err);
        }
    }

    updateOne(car, id) {
        try {
            //var db = MongoDao.getDb();
            this.db.collection('cars').updateOne({ _id: new ObjectId(id) }, { $set: car }, (err, result) => {})
        } catch (err) {
            console.log(err);
        }
    }

    deleteOne(id) {
            try {
                this.db.collection('cars').deleteOne({ _id: new ObjectId(id) }, (err, result) => {})
            } catch (err) {
                console.log(err);
            }
        }
        /*de reparat...
            sumTotal() {
                try {

                    var promise = new Promise((resolve, reject) => {
                        MongoDao.connectToServer(function(err, client) {
                            var suma = 0;
                            var db = MongoDao.getDb();
                            var cursor = db.collection('cars').find({ "JUDET": "VASLUI" }).project({});
                            cursor.forEach(element => {
                                if (element["TOTAL_VEHICULE"]) { suma = suma + element["TOTAL_VEHICULE"]; }
                                console.log(suma);
                            })
                            resolve(suma);
                        });
                    }).then(result => {
                        return result;
                    });
                    return promise;
                    
                    MongoDao.connectToServer(function(err, client) {
                        var db = MongoDao.getDb();
                        db.collection('cars').aggregate(
                            [{ $group: { _id: null, "sum": { "$sum": "$TOTAL_VEHICULE" } } }],
                            function(err, res) {
                                console.log(res);
                            }
                        )
                    });
} catch (err) {
    console.log(err);
}
}*/
}

module.exports = CarRepository;