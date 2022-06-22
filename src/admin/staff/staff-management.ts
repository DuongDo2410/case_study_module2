import { Staff } from "./staff";
const _ = require("lodash");
const fs = require("fs");

export class StaffManagement {
  private data: any = JSON.parse(
    fs.readFileSync("../database/staff.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  private static Staffs: Staff[] = [];

  constructor() {
    for (let item of this.data.staffs) {
      let id = item._id;
      let name = item._name;
      let email = item._email;
      let phone = item._phone;
      let address = item._address;
      let idRoom = item._idRoom;
      const staff = new Staff(id, name, email, phone, address, idRoom);
      StaffManagement.Staffs.push(staff);
    }
  }

  getAll(): any {
    return StaffManagement.Staffs;
  }

  create(staff: Staff): void {
    StaffManagement.Staffs.push(staff);
    this.writeFile();
  }

  remove(id: string): boolean {
    let index = this.findStaffById(id);
    if (index == -1) {
      return false;
    }
    StaffManagement.Staffs.splice(index, 1);
    this.writeFile();
    return true;
  }

  update(id: string, staff: Staff): boolean {
    let index = this.findStaffById(id);
    if (index == -1) {
      return false;
    }
    StaffManagement.Staffs[index] = staff;
    this.writeFile();
    return true;
  }

  findStaffById(id: string): number {
    let index = _.findIndex(
      StaffManagement.Staffs,
      (item: Staff) => item.id === id
    );
    return index;
  }
  findStaffByName(name: string): any {
    let staff = _.find(StaffManagement.Staffs, (item: Staff) =>
      item.name.toUpperCase().includes(name.toUpperCase())
    );
    return staff;
  }
  writeFile() {
    let file = {
      staffs: StaffManagement.Staffs,
    };
    fs.writeFileSync("../database/staff.json", JSON.stringify(file));
  }
}
