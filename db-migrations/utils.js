import {Connection} from "typeorm";
import {CONFIG} from "@config";
import {knexPostgresClient, knexTrackbuildClient} from "@common/Database/utils/knexProvider";

async function doDbExist(dbName = CONFIG.db.dbName) {
    const query = `SELECT EXISTS(SELECT datname FROM pg_catalog.pg_database WHERE datname = '${dbName}')`;
    const {rows: [row]} = await knexPostgresClient().raw(query);

    return row?.exists;
}

async function doDbSchemaExist(schemaName = CONFIG.db.schemaName) {
    // we need connection to `trackbuild` database to check if schema exist
    const query = `SELECT EXISTS(SELECT * FROM pg_catalog.pg_namespace where nspname = '${schemaName}')`;
    const {rows: [row]} = await knexTrackbuildClient().raw(query);

    return row?.exists;
}

async function createDatabaseSchema(schemaName = CONFIG.db.schemaName, dbName = CONFIG.db.dbName) {
    const dbExist = await doDbExist(dbName);

    if (!dbExist) {
        await knexPostgresClient().raw(`CREATE DATABASE ${dbName}`);
        console.log(`Created database ${dbName}`);
    }

    const dbSchemaExists = await doDbSchemaExist(schemaName);
    if (!dbSchemaExists) {
        await knexTrackbuildClient().raw(`CREATE SCHEMA IF NOT EXISTS ${schemaName}`);
        console.log(`Created schema ${dbName}:${schemaName}`);
    }
}

async function dropDbSchema() {
    console.log(`Attempting to drop schema "${CONFIG.db.schemaName}"...`);

    if (!await doDbExist()) {
        console.log(`Database ${CONFIG.db.dbName} doesn't exist, so schema not dropped`);
        return false;
    }

    try {
        await (knexTrackbuildClient().raw(
            `DROP SCHEMA IF EXISTS "${CONFIG.db.schemaName}" CASCADE;`
        ));
    } catch (error) {
        console.log(`Failed to drop schema "${CONFIG.db.schemaName}"`, error);
        return false;
    }

    console.log(`Dropped schema "${CONFIG.db.schemaName}"`);
    return true;
}
async function cloneDatabase() {
    // TODO: Implement
    // https://stackoverflow.com/questions/876522/creating-a-copy-of-a-database-in-postgresql
}
export {
    createDatabaseSchema,
    doDbSchemaExist, doDbExist,
    dropDbSchema
};
