import 'reflect-metadata'
import { DataSource } from 'typeorm'

import * as dotenv from 'dotenv'
import { Resource } from './entities/resource.entity'
dotenv.config()

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
    process.env

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: parseInt(DB_PORT || '3306'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,

    synchronize: NODE_ENV === 'dev' ? false : false,
    //logging logs sql command on the treminal
    logging: NODE_ENV === 'dev' ? false : false,
    entities: [Resource],
    migrations: [__dirname + '/migration/*.ts'],
    subscribers: [],
})
