import { StaffManagement } from "./../admin/staff/staff-management";
import * as readline from "readline-sync";
import { AccountManagement } from "../admin/account/account-management";
const accountManagement = new AccountManagement();
const staffManagement = new StaffManagement();
export class Validate {
  inputEmail(): string {
    let email = "";
    let isValidEmail = true;
    do {
      email = readline.question("Nhap email (abc@gmail.com):");
      let regexForEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regexForEmail.test(email)) {
        isValidEmail = false;
        console.log("Định dạng email không hợp lệ!");
      } else {
        isValidEmail = true;
        let currentUser = accountManagement.findAccountByEmail(email);
        if (currentUser) {
          console.log("Email đã tồn tại");
          isValidEmail = false;
        } else {
          isValidEmail = true;
        }
      }
    } while (!isValidEmail);
    return email;
  }

  inputPassword(): string {
    let password = "";
    let isValidPassword = true;
    let regexForPassword: RegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/g;
    do {
      password = readline.question("Nhap mat khau (Aa1bcd):");
      if (!regexForPassword.test(password)) {
        isValidPassword = false;
        console.log(
          "Nhap mat khau (mat khau it nhat 6 ky tu, 1 ký tự hoa, 1 ký tự thường.)"
        );
      } else {
        isValidPassword = true;
      }
    } while (!isValidPassword);
    return password;
  }

  inputConfirmPassword(password: string): void {
    let confirmPassword = "";
    do {
      confirmPassword = readline.question("Nhap lai mat khau:");
      if (password != confirmPassword) {
        console.log("Mật khẩu nhập lại không khớp!");
      }
    } while (password != confirmPassword);
  }
  inputIdStaff(): string {
    let id = "";
    let isValidEmail = true;

    do {
      id = readline.question("Nhap id nhan vien:");
      let idStaff = staffManagement.findStaffById(id);
      if (!idStaff) {
        console.log("id nhân viên không tồn tại.");
        isValidEmail = false;
      } else {
        isValidEmail = true;
      }
    } while (!isValidEmail);
    return id;
  }
}
