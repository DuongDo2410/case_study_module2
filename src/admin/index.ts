import { RunRoom } from "./room/index";
import * as readline from "readline-sync";
const room = new RunRoom();

export class RunAdmin {
  menu(): void {
    console.log(`
    ========================================================== MENU ADMIN ==========================================================
    ||                                                    1. Quản lý phòng ban                                                    ||
    ||                                                    2. Quản lý nhân viên                                                    ||
    ||                                                    3. Quản lý tài khoản                                                    ||
    ================================================================================================================================
    `);
  }
  action() {
    let choice = -1;
    do {
      this.menu();
      choice = +readline.question("Nhap lua chon cua ban:");
      switch (choice) {
        case 1:
          room.action();
          break;
      }
    } while (choice != 0);
  }
}
