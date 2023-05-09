import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'kelvin-database.c37aly7ftlww.ap-southeast-1.rds.amazonaws.com',
//   port: 5432,
//   username: 'kelvinc',
//   password: 'EdXbQ-VygQrBzElx8bHkQ5G_W2cm8Xyy',
//   database: 'kelvin_database',

//   entities: [__dirname + '/../**/*.entity.js'],
//   synchronize: true,
// };
