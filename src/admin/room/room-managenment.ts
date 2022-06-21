import { Room } from "./room";
const _ = require("lodash");
const fs = require("fs");
export class RoomManagenment {
  private static data: any = JSON.parse(
    fs.readFileSync("../database/room.json", {
      encoding: "utf8",
      flag: "r",
    })
  );
  getAll(): Room[] {
    return RoomManagenment.data.rooms;
  }

  create(room: Room): void {
    RoomManagenment.data.rooms = [...RoomManagenment.data.rooms, room];
    this.writeFile();
  }

  remove(id: string): boolean {
    let index = this.findRoomById(id);
    if (index == -1) {
      return false;
    }
    RoomManagenment.data.rooms.splice(index, 1);
    this.writeFile();
    return true;
  }

  update(id: string, room: Room): boolean {
    let index = this.findRoomById(id);
    if (index == -1) {
      return false;
    }
    RoomManagenment.data.rooms[index] = room;
    this.writeFile();
    return true;
  }

  findRoomById(id: string): number {
    let index = _.findIndex(
      RoomManagenment.data.rooms,
      (item: any) => item._id === id
    );
    return index;
  }
  writeFile() {
    fs.writeFileSync(
      "../database/room.json",
      JSON.stringify(RoomManagenment.data)
    );
  }
}
