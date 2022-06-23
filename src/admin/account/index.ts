import * as readline from "readline-sync";
import { RunAdmin } from "..";
import { RunUser } from "../../user";
import { Validate } from "../../validator/validate";
import { Account } from "./account";
import { AccountManagement } from "./account-management";
const accountManagement = new AccountManagement();
const validate = new Validate();
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
  getAll(): void {
    let accounts = accountManagement.getAll();
    console.table(accounts);
  }

  create(): void {
    let id = Math.random().toString(36).slice(2);
    let role = 0;
    let email = validate.inputEmail();
    let passWord = validate.inputPassword();
    validate.inputConfirmPassword(passWord);
    let idStaff = validate.inputIdStaff();

    const account = new Account(id, email, passWord, role, idStaff);
    accountManagement.create(account);
    console.log("Đăng ký thành công.");
  }
  remove(): void {
    let id = readline.question("Nhap id muon xoa:");
    let idAccount = accountManagement.findAccountById(id);
    if (idAccount != -1) {
      accountManagement.remove(id);
      console.log("Xóa thành công.");
    } else {
      console.log("Không tồn tại tài khoản có id này.");
    }
  }
  update(): void {
    let id = readline.question("Nhap id muon cap nhat:");
    let idAccount = accountManagement.findAccountById(id);
    if (idAccount != -1) {
      console.log("Tài khoản muốn cập nhật:");
      let index = accountManagement.findAccountById(id);
      let account = accountManagement.getAll()[index];
      console.table(account);

      let role = account.role;
      let idStaff = account.idStaff;
      let email = validate.inputEmail();
      let passWord = validate.inputPassword();
      validate.inputConfirmPassword(passWord);
      let newAccount = new Account(id, email, passWord, role, idStaff);
      accountManagement.update(id, newAccount);
      console.log("Cập nhật thành công.");
    } else {
      console.log("Không tồn tại tài khoản có id này.");
    }
  }

  findAccountByEmail(): void {
    let email = readline.question("Nhap email muon tim kiem:");
    let searchvalue = accountManagement.findAccountByEmail(email);
    console.log(searchvalue);
  }
  // logIn(): Account | null {
  //   let email = readline.question("Nhap email:");
  //   let passWord = readline.question("Nhap mat khau:");
  //   let login = accountManagement.logIn(email, passWord);
  //   if (login) {
  //     return login;
  //   }
  //   return null;
  // }

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
          this.getAll();
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
