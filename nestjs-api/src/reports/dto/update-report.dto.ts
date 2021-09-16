import { ReportStatus, ReportStatusList } from '../entities/report.entity';
import { IsIn, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateReportDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  file_url: string;

  @IsIn(ReportStatusList)
  @IsNotEmpty()
  status: ReportStatus;
}
