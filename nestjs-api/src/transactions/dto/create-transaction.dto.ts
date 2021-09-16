import {
  IsISO8601,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsIn,
} from 'class-validator';

import {
  TransactionCategoryList,
  TransactionTypeList,
} from '../entities/transaction.entity';

import {
  TransactionCategory,
  TransactionType,
} from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsISO8601()
  @IsNotEmpty()
  payment_date: Date;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsIn(TransactionCategoryList)
  @IsNotEmpty()
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;

  @IsIn(TransactionTypeList)
  @IsNotEmpty()
  type: TransactionType;
}
