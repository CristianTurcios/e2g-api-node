module.exports = {
    PORT: process.env.PORT || 3000,
    COSMOS: {
        // URL: process.env.COSMOS_URL || 'https://poc-saas-e2g.documents.azure.com:443/',
        // SECRET_KEY: process.env.COSMOS_KEY || '0Jg3cviWeCvDGNiD1hdTfCgb159rbO7EQkkLj7taLfOJveKUkK6jaqfQomRSQCqghOVmpcslcie6LI61pDXMdA=='
        URL: process.env.COSMOS_URL || 'https://unifiedportal-nosql.documents.azure.com:443/',
        SECRET_KEY: process.env.COSMOS_KEY || 'K3MC25EmxUMb4qjIHK93Cw7HQ6K1v9tklouX4LoSi7by8rDuOhAZKBjD0eDbmAGywr7E9UrRAGlTBHFLlRCo7g=='
    },
    QUERY_COLLECTIONS: {
        DB_LINK: 'dbs',
        COLLS_LINK: 'colls',
        COSMOS_DB_NAME: process.env.COSMOS_DB_NAME || 'unified-portal-documentdb-dev',
        DATABASE_LINK: process.env.DATABASE_LINK || 'dbs/unified-portal-documentdb-dev/',
        DOCUMENT_LINK: process.env.DOCUMENT_LINK || 'dbs/unified-portal-documentdb-dev/colls',
    }
};
