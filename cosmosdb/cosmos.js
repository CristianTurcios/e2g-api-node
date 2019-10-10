const DocumentDBClient = require('documentdb').DocumentClient;
const Config = require('../config.js');
const client = new DocumentDBClient(Config.COSMOS.URL, {
    masterKey: Config.COSMOS.SECRET_KEY
});

const DocDBUtils = {
    getCollection(databaseLink, collectionId, callback) {
        const querySpec = {
            query: 'SELECT * FROM root r WHERE r.id=@id',
            parameters: [{
                name: '@id',
                value: collectionId
            }]
        };

        client.queryCollections(databaseLink, querySpec).toArray((err, results) => {
            if (err) {
                callback(err);

            } else {
                if (results.length === 0) {
                    const collectionSpec = {
                        id: collectionId
                    };

                    client.createCollection(databaseLink, collectionSpec, (err, created) => {
                        callback(null, created);
                    });

                } else {
                    callback(null, results[0]);
                }
            }
        });
    },

    getDocuments(collectionName, callback) {
        client.readDocuments(`${Config.QUERY_COLLECTIONS.DOCUMENT_LINK}/${collectionName}`).toArray((err, results) => {
            if (err) {
                callback(err);

            } else {
                callback(null, results);
            }
        });
    },

    getDocument(collectionName, querySpec, callback) {
        client.queryDocuments(`${Config.QUERY_COLLECTIONS.DOCUMENT_LINK}/${collectionName}`, querySpec, {
            "enableCrossPartitionQuery": true
        }).toArray((err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        });
    },
};

module.exports = DocDBUtils;
