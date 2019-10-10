const CosmosDB = require('../cosmosdb/cosmos');

const CosmosHelpers = {
    getCosmosDocument: (query, collection) => {
        return new Promise((resolve, reject) => {     
            CosmosDB.getDocument(collection, query, (err, results) => {
                if (err) {
                    console.log('err');
                    return reject(err);
                }
                else {
                    // console.log('results');
                    // console.log(results);
                    resolve(results);
                }
            });
        });
    },

    getCosmosDocuments: (collection) => {
        return new Promise((resolve, reject) => {
            CosmosDB.getDocuments(collection, (err, results) => {
                if (err) {
                    console.log('err');
                    return reject(err);
                } else {
                    // console.log('results');
                    // console.log(results);
                    resolve(results);
                }
            });
        });
    },
};

module.exports = CosmosHelpers;