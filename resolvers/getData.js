const { getCosmosDocument, getCosmosDocuments } = require('../helpers/cosmos');
const Config = require('../config');

module.exports = {
    getDocument: (collectionId, documentId) => {
        var querySpec = {
            query: 'SELECT * FROM m WHERE m.id = @id',
            parameters: [{
                name: '@id',
                value: documentId
            }]
        };

        return new Promise((resolve, reject) => {
            getCosmosDocument(querySpec, collectionId).then(data => {
                console.log('data', data);
                return resolve(data);
            })
            .catch((err) => {
                console.log('err', err);
                return reject(err);
            });
        });
    },

    getDocuments: collectionId => {
        const collection = collectionId;
        console.log('collection', collection);
        
        return new Promise((resolve, reject) => {
            getCosmosDocuments(collection).then(data => {
                    console.log('data', data);
                    return resolve(data);
                })
                .catch((err) => {
                    console.log('err', err);
                    return reject(err);
                });
        });
    }

    
};