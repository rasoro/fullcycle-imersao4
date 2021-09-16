import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class TenantService {
  private account: Account | null;

  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  async setTenantBy(subdomain: string) {
    this.tenant = await this.accountModel.findOne({
      where: {
        subdomain,
      },
      rejectOnEmpty: true,
    });
  }

  get tenant() {
    return this.account;
  }

  set tenant(tenant: Account) {
    this.account = tenant;
  }
}
