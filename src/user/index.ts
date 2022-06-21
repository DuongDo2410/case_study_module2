import * as readline from "readline-sync";

export class RunUser {
  menu(): void {
    console.log(`
    ============================================================ MENU USER ===========================================================
    ||                                                    1. Thông tin tài khoản                                                    ||
    ||                                                    2. Thông tin phòng ban                                                    ||
    ||                                                    3. Cập nhật tài khoản                                                     ||
    ==================================================================================================================================
    `);
  }
  action() {
    let choice = -1;
    do {
      this.menu();
      choice = +readline.question("Nhap lua chon cua ban:");
      switch (choice) {
        case 1:
          console.log("Thông tin tài khoản");

          break;
      }
    } while (choice != 0);
  }
}
