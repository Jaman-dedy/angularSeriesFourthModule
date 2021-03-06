import { LogginService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private logginService: LogginService) {}
  addAcount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logginService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
