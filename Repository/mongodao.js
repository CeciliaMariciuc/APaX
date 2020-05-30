'use strict';
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/AutoPark";

var _db;

module.exports = {

    connectToServer: function(callback) {
        MongoClient.connect(url /*, { useNewUrlParser: true }*/ , function(err, client) {
            _db = client.db('AutoPark');
            return callback(err);
        });
    },

    getDb: function() {
        return _db;
    },
    disconnect: function() {
        if (_db) {
            _db.close();
        }
    }
}