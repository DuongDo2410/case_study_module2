import { RunUser } from "./user/index";
import { RunAdmin } from "./admin";
import { AccountManagement } from "./admin/account/account-management";
import * as readline from "readline-sync";
import { Account } from "./admin/account/account";

const accountManagement = new AccountManagement();
const admin = new RunAdmin();
const user = new RunUser();

let choice = -1;
do {
  menu();
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
      // create();
      break;
  }
} while (choice != 0);

function menu(): void {
  console.log(`
  ================================================== Mời chọn chức năng ==================================================
  ||                                                    1. Đăng nhập                                                    ||
  ||                                                    2. Đăng ký                                                      ||
  ========================================================================================================================
  `);
}
function Authentication(): any {
  let isLogIn = logIn();
  if (isLogIn.role === 1) {
    return admin.action();
  }
  return user.action();
}
function logIn(): any {
  let email = readline.question("Nhap email:");
  let passWord = readline.question("Nhap mat khau:");
  let login = accountManagement.logIn(email, passWord);
  return login;
}
// function create(): void {
//   let id = Math.random().toString(36).slice(2);
//   let name = readline.question("Nhap ten:");
//   let email = readline.question("Nhap email:");
//   let passWord = readline.question("Nhap mat khau:");
//   let role = 0;
//   let idStaff = readline.question("Nhap id nhan vien muon cap nhat:");

//   const account = new Account(id, name, email, passWord, role, idStaff);
//   accountManagement.create(account);
// }
