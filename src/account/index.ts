import { RunUser } from "./../user/index";
import { RunAdmin } from "../admin";
import * as readline from "readline-sync";
import { Account } from "./account";
import { AccountManagement } from "./account-management";

const accountManagement = new AccountManagement();
export class RunAccount {
  menu(): void {
    console.log(`
    ================================================== Mời chọn chức năng ==================================================
    ||                                                    1. Đăng nhập                                                    ||
    ||                                                    2. Đăng ký                                                      ||
    ========================================================================================================================
    `);
  }
  create(): void {
    let id = Math.random().toString(36).slice(2);
    let name = readline.question("Nhap ten:");
    let email = readline.question("Nhap email:");
    let passWord = readline.question("Nhap mat khau:");
    let role = 2;
    const account = new Account(id, name, email, passWord, role);
    accountManagement.create(account);
  }
  remove(): void {
    let id = readline.question("Nhap id muon xoa:");
    accountManagement.remove(id);
  }
  update(): void {
    let id = readline.question("Nhap id muon cap nhat:");
    console.log("Tài khoản muốn cập nhật:");
    let index = accountManagement.findAccountById(id);
    let account = accountManagement.getAll()[index];
    console.table(account);
    let name = readline.question("Nhap ten muon cap nhat:");
    let email = readline.question("Nhap email muon cap nhat:");
    let passWord = readline.question("Nhap mat khau muon cap nhat:");
    // let role = account.role;
    let role = 2;
    console.log(account.email);
    let newAccount = new Account(id, name, email, passWord, role);
    accountManagement.update(id, newAccount);
  }
  logIn(): any {
    let email = readline.question("Nhap email:");
    let passWord = readline.question("Nhap mat khau:");
    let login = accountManagement.logIn(email, passWord);
    return login;
    // console.log("account", isLogIn);
  }
}
