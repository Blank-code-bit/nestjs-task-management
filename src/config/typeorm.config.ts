import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'tiny.db.elephantsql.com',
  port: 5432,
  username: 'fxuxojtu',
  password: 'EdXbQ-VygQrBzElx8bHkQ5G_W2cm8Xyy',
  database: 'fxuxojtu',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
