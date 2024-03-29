import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost/bills',
    ),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
