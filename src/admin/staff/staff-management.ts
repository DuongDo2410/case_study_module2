import { Database } from "./database";
import { Staff } from "./staff";
const _ = require("lodash");
const fs = require("fs");
const data = new Database();
export class StaffManagement {
  private static Staffs: Staff[] = data.Staffs;

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

  findStaffByIds(id: string): Staff {
    let staff: Staff = _.find(
      StaffManagement.Staffs,
      (item: Staff) => item.id === id
    );
    return staff;
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
