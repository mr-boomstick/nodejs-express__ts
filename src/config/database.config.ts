import dotenv = require('dotenv');

dotenv['config']();

const CONFIG = {
    development: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOSTNAME,
        dialect: process.env.DEV_DB_RDBMS,
        migrationStorageTableName: process.env.DEV_DB_MIGRATIONS_TABLE
    },
    test: {
        username: process.env.TEST_DB_USERNAME,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        host: process.env.TEST_DB_HOSTNAME,
        dialect: process.env.TEST_DB_RDBMS,
        migrationStorageTableName: process.env.TEST_DB_MIGRATIONS_TABLE
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        dialect: process.env.PROD_DB_RDBMS,
        migrationStorageTableName: process.env.PROD_DB_MIGRATIONS_TABLE
    },
};

export = CONFIG;