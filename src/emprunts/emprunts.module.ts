import { Module } from '@nestjs/common';
import { EmpruntsService } from './emprunts.service';
import { EmpruntsController } from './emprunts.controller';

@Module({
  providers: [EmpruntsService], 
  controllers: [EmpruntsController], 
})
export class EmpruntsModule {}
