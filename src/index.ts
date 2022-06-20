import { RunUser } from "./user/index";
import { RunAdmin } from "./admin/index";
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
  let choice = +readline.question("Nhap lua chon cua ban:");
  switch (choice) {
    case 1:
      console.log(
        `======================================================== ĐĂNG NHẬP ========================================================`
      );
      account.logIn();

      break;
    case 2:
      console.log(
        `======================================================== ĐĂNG KÝ ========================================================`
      );
      account.create();
      break;
    default:
      console.log("Thao tác không phù hợp. Mời chọn lại!!!");
  }
} while (choice != 0);
