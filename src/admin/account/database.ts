import { Account } from "./account";

const fs = require("fs");

export class Database {
  private data: any = JSON.parse(
    fs.readFileSync("../database/account.json", {
      encoding: "utf8",
      flag: "r",
    })
  );
  private accounts: Account[] = [];

  constructor() {
    for (let item of this.data.accounts) {
      let id = item._id;
      let email = item._email;
      let passWord = item._passWord;
      let role = item._role;
      let idStaff = item._idStaff;
      const account = new Account(id, email, passWord, role, idStaff);
      this.accounts.push(account);
    }
  }

  get account() {
    return this.accounts;
  }
}
