import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { BillSchema } from './schemas/Bill.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bill', schema: BillSchema }])],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
