import { RunAccount } from "./admin/account";
import { RunUser } from "./user/index";
import { RunAdmin } from "./admin";
import * as readline from "readline-sync";
import { AccountManagement } from "./admin/account/account-management";
const accountManagement = new AccountManagement();

const admin = new RunAdmin();
const user = new RunUser();
const account = new RunAccount();
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
      account.create();
      break;
  }
} while (choice != 0);

function menu(): void {
  console.log(`
  ================================================== Mời chọn chức năng ==================================================
  ||                                                    1. Đăng nhập                                                    ||
  ||                                                    2. Đăng ký                                                      ||
  ||                                                    0. Thoát                                                        ||
  ========================================================================================================================
  `);
}

function Authentication() {
  let email = readline.question("Nhap email:");
  let passWord = readline.question("Nhap mat khau:");
  let login = accountManagement.logIn(email, passWord);
  if (login) {
    console.log("Đăng nhập thành công.");
    if (login.role === 1) {
      admin.action();
    }
    user.action();
  } else {
    console.log("Sai email hoặc mật khẩu");
  }
}
