import { RunUser } from "./user/index";
import { RunAdmin } from "./admin";
import { AccountManagement } from "./account/account-management";
import * as readline from "readline-sync";
import { Account } from "./account/account";
import { RunAccount } from "./account";
const fs = require("fs");

const accountManagement = new AccountManagement();
const account = new RunAccount();
const admin = new RunAdmin();
const user = new RunUser();

let choice = -1;
do {
  account.menu();
  choice = +readline.question("Nhap lua chon cua ban:");
  switch (choice) {
    case 1:
      console.log(
        `======================================================== ĐĂNG NHẬP ========================================================`
      );
      Authentication();

      break;
    case 2:
      console.log(
        `======================================================== ĐĂNG KÝ ==========================================================`
      );
      account.create();
      break;
  }
} while (choice != 0);
function Authentication(): any {
  let isLogIn = account.logIn();
  if (isLogIn._role === 1) {
    return admin.action();
  }
  return user.action();
}
