import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      cors: true,
      logger: WinstonModule.createLogger({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
          new winston.transports.File({
            filename: 'logs/app.log',
            format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
        ],
      }),
    },
  );
  app.use(helmet());
  app.use(compression());

  app.use(bodyParser.json({limit: '550mb'}));
  app.use(bodyParser.urlencoded({limit: '550mb', extended: true}));

  await app.listen(app.get('ConfigService').get('port'));
}
bootstrap();
