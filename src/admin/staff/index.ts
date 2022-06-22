import { StaffManagement } from "./staff-management";
import * as readline from "readline-sync";
import { Staff } from "./staff";

const staffManagement = new StaffManagement();
export class RunStaff {
  menu(): void {
    console.log(`
        ================================================== Quản lý nhân viên ===================================================
        ||                                                    1. Danh sánh nhân viên                                          ||
        ||                                                    2. Thêm mới                                                     ||
        ||                                                    3. Cập nhật                                                     ||
        ||                                                    4. Tìm kiếm                                                     ||
        ||                                                    5. xóa                                                          ||
        ========================================================================================================================
        `);
  }
  getAll(): void {
    let staffs = staffManagement.getAll();
    console.table(staffs);
  }
  create(): void {
    let id = Math.random().toString(36).slice(2);
    let name = readline.question("Nhap ten:");
    let email = readline.question("Nhap email:");
    let phone = readline.question("Nhap so dien thoai:");
    let address = readline.question("Nhap dia chi:");
    let idRoom = readline.question("Nhap id phong ban:");
    const staff = new Staff(id, name, email, phone, address, idRoom);
    staffManagement.create(staff);
  }
  remove(): void {
    let id = readline.question("Nhap id nhan vien muon xoa:");
    staffManagement.remove(id);
  }
  update(): void {
    let id = readline.question("Nhap id muon cap nhat:");
    console.log("Tài khoản muốn cập nhật:");
    let index = staffManagement.findStaffById(id);
    let account = staffManagement.getAll()[index];
    console.table(account);

    let name = readline.question("Nhap ten:");
    let email = readline.question("Nhap email:");
    let phone = readline.question("Nhap so dien thoai:");
    let address = readline.question("Nhap dia chi:");
    let idRoom = readline.question("Nhap id phong ban:");
    const staff = new Staff(id, name, email, phone, address, idRoom);
    staffManagement.update(id, staff);
  }
  findRoomByName(): void {
    let name = readline.question("Nhap ten muon tim kiem:");
    let valueSearch = staffManagement.findStaffByName(name);
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
            `=================================================== Danh sách nhân viên ==================================================`
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
            `==================================================== TÌM KIẾM NHÂN VIÊN ====================================================`
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
