import { Account } from "./account";
const _ = require("lodash");
const fs = require("fs");

export class AccountManagement {
  private data: any = JSON.parse(
    fs.readFileSync("../database/account.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  private static accounts: Account[] = [];

  constructor() {
    for (let item of this.data.accounts) {
      let id = item._id;
      let name = item._name;
      let email = item._email;
      let passWord = item._passWord;
      let role = item._role;
      let idStaff = item._idStaff;
      const account = new Account(id, name, email, passWord, role, idStaff);
      AccountManagement.accounts.push(account);
    }
  }

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
  logIn(email: string, passWord: string): any {
    let account = this.findAccountByEmail(email);
    if (email === account.email && passWord === account.passWord) {
      return account;
    }
    return undefined;
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
