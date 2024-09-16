/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ load: [configuration] }),
    MongooseModule.forRoot(
      'mongodb+srv://mean_user:UDf8nyN9zOcXiTPP@micluster.yzrruf8.mongodb.net/bbddFM2',
      {
        connectionName: 'usuarios',
      },
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
