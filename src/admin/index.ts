import { RunAccount } from "./account";
import { RunStaff } from "./staff/index";
import { RunRoom } from "./room/index";
import * as readline from "readline-sync";
import { Account } from "./account/account";
const room = new RunRoom();
const staff = new RunStaff();
const account = new RunAccount();
export class RunAdmin {
  menu(): void {
    console.log(`
    ========================================================== MENU ADMIN ==========================================================
    ||                                                    1. Quản lý phòng ban                                                    ||
    ||                                                    2. Quản lý nhân viên                                                    ||
    ||                                                    3. Quản lý tài khoản                                                    ||
    ||                                                    4. Thông tin tài khoản                                                  ||
    ||                                                    0. Đăng Xuất                                                            ||
    ================================================================================================================================
    `);
  }
  showAccount() {
    let acc = account.logIn();
    console.log(acc);
  }
  action() {
    let choice = -1;
    do {
      this.menu();
      choice = +readline.question("Nhap lua chon cua ban:");
      switch (choice) {
        case 1:
          console.log(
            `======================================================== QUẢN LÝ PHÒNG BAN ========================================================`
          );
          room.action();
          break;
        case 2:
          console.log(
            `======================================================== QUẢN LÝ NHÂN VIÊN ========================================================`
          );
          staff.action();
          break;
        case 3:
          console.log(
            `======================================================== QUẢN LÝ TÀI KHOẢN ========================================================`
          );
          account.action();
          break;
        case 4:
          console.log(
            `======================================================== THÔNG TIN TÀI KHOẢN ========================================================`
          );
          this.showAccount();
          break;
        default:
          console.log("Thao tác không đúng, mời chọn lại.");
      }
    } while (choice != 0);
  }
}
