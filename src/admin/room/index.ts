import * as readline from "readline-sync";
import { Room } from "./room";
import { RoomManagenment } from "./room-managenment";

const roomManagement = new RoomManagenment();
export class RunRoom {
  menu(): void {
    console.log(`
        ================================================== Quản lý phòng ban ===================================================
        ||                                                    1. Thêm mới                                                     ||
        ||                                                    2. Cập nhật                                                     ||
        ||                                                    3. xóa                                                          ||
        ========================================================================================================================
        `);
  }
  create(): void {
    let id = Math.random().toString(36).slice(2);
    let name = readline.question("Nhap ten phong ban:");
    const room = new Room(id, name);
    roomManagement.create(room);
  }
  remove(): void {
    let id = readline.question("Nhap id muon xoa:");
    roomManagement.remove(id);
  }
  update(): void {
    let id = readline.question("Nhap id muon cap nhat:");
    console.log("Tài khoản muốn cập nhật:");
    let index = roomManagement.findRoomById(id);
    let account = roomManagement.getAll()[index];
    console.table(account);
    let name = readline.question("Nhap ten muon cap nhat:");
    let newRoom = new Room(id, name);
    console.log("test", newRoom);
    roomManagement.update(id, newRoom);
  }
  action() {
    let choice = -1;
    do {
      this.menu();
      choice = +readline.question("Nhap lua chon cua ban:");
      switch (choice) {
        case 1:
          console.log(
            `======================================================== THÊM MỚI ========================================================`
          );
          this.create();
          break;
        case 2:
          console.log(
            `======================================================== CẬP NHẬT ========================================================`
          );
          this.update();
          break;
        case 3:
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
