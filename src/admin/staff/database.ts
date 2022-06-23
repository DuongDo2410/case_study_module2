import { Staff } from "./staff";

const fs = require("fs");

export class Database {
  private data: any = JSON.parse(
    fs.readFileSync("../database/staff.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  private _Staffs: Staff[] = [];

  constructor() {
    for (let item of this.data.staffs) {
      let id = item._id;
      let name = item._name;
      let email = item._email;
      let phone = item._phone;
      let address = item._address;
      let idRoom = item._idRoom;
      const staff = new Staff(id, name, email, phone, address, idRoom);
      this.Staffs.push(staff);
    }
  }
  get Staffs(): Staff[] {
    return this._Staffs;
  }
}
