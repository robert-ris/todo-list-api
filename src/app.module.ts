import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config';
import { TasksModule } from './modules/task.module';


@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('database_connection'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
