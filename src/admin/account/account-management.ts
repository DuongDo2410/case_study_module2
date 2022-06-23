import { Account } from "./account";
import { Database } from "./database";
const _ = require("lodash");
const fs = require("fs");
const data = new Database();
export class AccountManagement {
  private static accounts: Account[] = data.account;

  getAll(): Account[] {
    return AccountManagement.accounts;
  }

  create(account: Account): void {
    AccountManagement.accounts.push(account);
    this.writeFile();
  }

  remove(id: string): boolean {
    let index = this.findAccountById(id);
    if (index == -1) {
      return false;
    }
    AccountManagement.accounts.splice(index, 1);
    this.writeFile();
    return true;
  }

  update(id: string, account: Account): boolean {
    let index = this.findAccountById(id);
    if (index == -1) {
      return false;
    }
    AccountManagement.accounts[index] = account;
    this.writeFile();
    return true;
  }

  logIn(email: string, passWord: string): Account | null {
    for (let account of AccountManagement.accounts) {
      if (email == account.email && passWord == account.passWord) {
        return account;
      }
    }
    return null;
  }

  findAccountByEmail(email: string): Account {
    let accounts = AccountManagement.accounts;
    let account: Account = _.find(
      accounts,
      (item: Account) => item.email === email
    );
    return account;
  }
  findAccountById(id: string): number {
    let index = _.findIndex(
      AccountManagement.accounts,
      (item: Account) => item.id === id
    );
    return index;
  }

  writeFile(): void {
    let file = {
      accounts: AccountManagement.accounts,
    };
    fs.writeFileSync("../database/account.json", JSON.stringify(file));
  }
}
