import { Module } from '@nestjs/common';
import { ReportService } from './reports.service';
import { ReportController } from './reports.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Report } from './entities/report.entity';

@Module({
  imports: [SequelizeModule.forFeature([Report])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
