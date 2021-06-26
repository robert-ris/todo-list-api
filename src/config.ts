import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () => ({
  port: +process.env.PORT || 3000,
  database_connection: {
    type: 'mysql',
    entities: [__dirname + '/entities/*.entity.{js,ts}'],
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    keepConnectionAlive: true,
    // synchronize: process.env.DB_SYNC === 'true',
    logging: process.env.DB_LOGGING === 'true',
    charset: 'utf8_unicode_ci',

  } as TypeOrmModuleOptions,
});