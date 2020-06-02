"use strict";
class FilterEntry {
    constructor(url) {
        this.url = url;
    }

    getQuery() {
        if (!this.url.includes("?")) {
            return JSON.parse('{}');
        }
        var query = '{';
        var param = this.url.substring(this.url.lastIndexOf('?') + 1);
        var listParams = param.split('&');
        for (var i = 0; i < listParams.length; i++) {
            var field, fieldValue;
            field = listParams[i].split('=')[0];
            fieldValue = listParams[i].split('=')[1];
            if (fieldValue.match("^[A-Za-z0-9]+$")) {
                if (field != '_id') {
                    field = field.toUpperCase();
                    fieldValue = fieldValue.toUpperCase();
                }
                if (field != 'TOTAL_VEHICULE') {
                    if (field == 'CATEGORIE_COMUNITARA') {
                        query = query + '"' + field + '" :' + '"' + fieldValue + '  ",'

                    } else {
                        query = query + '"' + field + '" :' + '"' + fieldValue + '",'
                    }
                } else {
                    query = query + '"' + field + '" :' + fieldValue + ','
                }
            } else {
                return JSON.parse('{}');
            }
        }
        var query = query.replace(/.$/, "}")
        return JSON.parse(query);
    }
}

module.exports = FilterEntry;
//var test = new FilterEntry("api/cars/filter?judet=iasi&marca=iveco&total_vehicule=18");
//console.log(test.getQuery());