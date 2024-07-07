"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = exports.postgresDataSourceConfig = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const config_1 = require("@nestjs/config");
dotenv.config({
    path: '.env.development.local',
});
const PostgresDataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migration/*{.ts,.js}'],
    subscribers: [],
};
exports.postgresDataSourceConfig = (0, config_1.registerAs)('postgres', () => PostgresDataSourceOptions);
exports.PostgresDataSource = new typeorm_1.DataSource(PostgresDataSourceOptions);
//# sourceMappingURL=data-source.js.map