import { Account } from "./../admin/account/account";
import * as readline from "readline-sync";
import { StaffManagement } from "../admin/staff/staff-management";
import { Validate } from "../validator/validate";
const Staffmanagement = new StaffManagement();
const validate = new Validate();

export class RunUser {
  menu(): void {
    console.log(`
    ============================================================ MENU USER ===========================================================
    ||                                                    1. Thông tin tài khoản                                                    ||
    ||                                                    2. Thông tin của bạn                                                      ||
    ||                                                    3. Thay đổi thông tin của bạn                                             ||
    ==================================================================================================================================
    `);
  }
  action(user: Account) {
    let choice = -1;
    do {
      this.menu();
      choice = +readline.question("Nhap lua chon cua ban:");
      switch (choice) {
        case 1:
          console.log(
            `======================================================== THÔNG TIN TÀI KHOẢN ========================================================`
          );
          let staff = Staffmanagement.findStaffByIds(user.idStaff);
          console.log(`email: ${user.email}\n Tên: ${staff.name}`);
          break;
        case 3:
          console.log(
            `======================================================== THÔNG TIN TÀI KHOẢN ========================================================`
          );
          let passWord = validate.inputPassword();
          user.passWord = passWord;
          console.log("Thay đổi thành công");
          break;
      }
    } while (choice != 0);
  }
}
