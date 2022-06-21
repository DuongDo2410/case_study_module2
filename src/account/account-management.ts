import { Account } from "./account";
const _ = require("lodash");
const fs = require("fs");

export class AccountManagement {
  private static data: any = JSON.parse(
    fs.readFileSync("../database/account.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  getAll(): Account[] {
    return AccountManagement.data.accounts;
  }

  create(account: Account): void {
    AccountManagement.data.accounts = [
      ...AccountManagement.data.accounts,
      account,
    ];
    fs.writeFileSync(
      "../database/account.json",
      JSON.stringify(AccountManagement.data)
    );
  }

  remove(id: string): boolean {
    let index = this.findAccountById(id);
    if (index == -1) {
      return false;
    }

    AccountManagement.data.accounts.splice(index, 1);
    fs.writeFileSync(
      "../database/account.json",
      JSON.stringify(AccountManagement.data)
    );
    return true;
  }

  update(id: string, account: Account): boolean {
    let index = this.findAccountById(id);
    if (index == -1) {
      return false;
    }
    AccountManagement.data.accounts[index] = account;
    fs.writeFileSync(
      "../database/account.json",
      JSON.stringify(AccountManagement.data)
    );
    return true;
  }
  logIn(email: string, passWord: string): any {
    let account = this.findAccountByEmail(email);
    if (account == undefined) {
      console.log("ko có tk");
      return false;
    }
    // console.log(account._email);
    if (email === account._email && passWord === account._passWord) {
      return account;
    }
    // console.log("sai email hoặc password");
  }
  // Authentication(account: Account): any {
  //   console.log(account);
  //   // if(account.role === "2"){
  //   //   return true
  //   // }
  //   // return false
  // }
  findAccountById(id: string): number {
    let index = _.findIndex(
      AccountManagement.data.accounts,
      (item: any) => item._id === id
    );
    return index;
  }
  findAccountByEmail(email: string): any {
    let accounts = AccountManagement.data.accounts;
    let account: Account = _.find(
      accounts,
      (item: any) => item._email === email
    );

    // let account: Account | undefined = undefined;
    // for (let i = 0; i < accounts.length; i++) {
    //   if (email == accounts[i]._email) {
    //     account = accounts[i];
    //   }
    // }
    return account;
  }
}
