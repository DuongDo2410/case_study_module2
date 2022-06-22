import * as readline from "readline-sync";
import { Account } from "./account";
import { AccountManagement } from "./account-management";

const accountManagement = new AccountManagement();
export class RunAccount {
  menu(): void {
    console.log(`
    ======================================================= Quản lý tài khoản  =============================================
    ||                                                    1. Danh sách tài khoản                                          ||
    ||                                                    2. Thêm mới                                                     ||
    ||                                                    3. Cập nhật                                                     ||
    ||                                                    4. Tìm kiếm                                                     ||
    ||                                                    5. Xóa                                                          ||
    ||                                                    0. Thoát                                                        ||
    ========================================================================================================================
    `);
  }
  // getAll(): void {
  //   let accounts = accountManagement.getAll();
  //   console.table(accounts);
  // }
  create(): void {
    let id = Math.random().toString(36).slice(2);
    let name = readline.question("Nhap ten:");
    let email = readline.question("Nhap email:");
    let passWord = readline.question("Nhap mat khau:");
    let role = 0;
    let idStaff = readline.question("Nhap id nhan vien muon cap nhat:");

    const account = new Account(id, name, email, passWord, role, idStaff);
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
    let role = 0;
    let idStaff = readline.question("Nhap id nhan vien muon cap nhat:");
    console.log(account.email);
    // let newAccount = new Account(id, name, email, passWord, role, idStaff);
    // accountManagement.update(id, newAccount);
  }

  findAccountByEmail(): void {
    let email = readline.question("Nhap email muon tim kiem:");
    let searchvalue = accountManagement.findAccountByEmail(email);
    console.log(searchvalue);
  }
  action() {
    let choice = -1;
    do {
      this.menu();
      choice = +readline.question("Nhap lua chon cua ban:");
      switch (choice) {
        case 1:
          console.log(
            `=================================================== Danh sách tài khoản ==================================================`
          );
          // this.getAll();
          console.table(accountManagement.getAll());
          break;
        case 2:
          console.log(
            `======================================================== THÊM MỚI ========================================================`
          );
          this.create();
          break;
        case 3:
          console.log(
            `======================================================== CẬP NHẬT ========================================================`
          );
          this.update();
          break;
        case 4:
          console.log(
            `==================================================== TÌM KIẾM TÀI KHOẢN ====================================================`
          );
          this.findAccountByEmail();
          break;
        case 5:
          console.log(
            `=========================================================== XÓA ===========================================================`
          );
          this.remove();
          break;
        default:
          console.log("Thao tác không đúng, mời chọn lại.");
      }
    } while (choice != 0);
  }
}
