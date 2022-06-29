import { StaffManagement } from "./../staff/staff-management";
import * as readline from "readline-sync";
import { Room } from "./room";
import { RoomManagenment } from "./room-managenment";

const roomManagement = new RoomManagenment();
const Staffmanagement = new StaffManagement();
export class RunRoom {
  menu(): void {
    console.log(`
        ================================================== Quản lý phòng ban ===================================================
        ||                                                    1. Danh sách phòng                                              ||
        ||                                                    2. Thêm mới                                                     ||
        ||                                                    3. Cập nhật                                                     ||
        ||                                                    4. Tìm kiếm                                                    ||
        ||                                                    5. xóa                                                          ||
        ========================================================================================================================
        `);
  }
  getAll(): void {
    let rooms = roomManagement.getAll();
    console.table(rooms);
  }
  create(): void {
    let id = Math.random().toString(36).slice(2);
    let name = readline.question("Nhap ten phong ban:");
    const room = new Room(id, name);
    roomManagement.create(room);
  }
  remove(): void {
    let id = readline.question("Nhap id muon xoa:");
    for (const item of Staffmanagement.getAll()) {
      if (item.idRoom == id) {
        console.log("Không thể xóa phòng ban khi còn nhân viên");
        break;
      } else {
        roomManagement.remove(id);
        break;
      }
    }
  }
  update(): void {
    let id = readline.question("Nhap id muon cap nhat:");
    console.log("Tài khoản muốn cập nhật:");
    let index = roomManagement.findRoomById(id);
    let account = roomManagement.getAll()[index];
    console.table(account);
    let name = readline.question("Nhap ten muon cap nhat:");
    let newRoom = new Room(id, name);
    roomManagement.update(id, newRoom);
  }
  findRoomByName(): void {
    let name = readline.question("Nhap ten muon tim kiem:");
    let valueSearch = roomManagement.findRoomByName(name);
    console.log(valueSearch);
  }
  action() {
    let choice = -1;
    do {
      this.menu();
      choice = +readline.question("Nhap lua chon cua ban:");
      switch (choice) {
        case 1:
          console.log(
            `===================================================== DANH SÁCH PHÒNG ====================================================`
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
            `======================================================== TÌM KIẾM PHÒNG ========================================================`
          );
          this.findRoomByName();
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
