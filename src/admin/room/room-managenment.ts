import { Room } from "./room";
const _ = require("lodash");
const fs = require("fs");
export class RoomManagenment {
  private data: any = JSON.parse(
    fs.readFileSync("../database/room.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  private static rooms: Room[] = [];

  constructor() {
    for (let item of this.data.rooms) {
      let id = item._id;
      let name = item._name;

      const room = new Room(id, name);
      RoomManagenment.rooms.push(room);
    }
  }
  getAll(): Room[] {
    return RoomManagenment.rooms;
  }

  create(room: Room): void {
    RoomManagenment.rooms.push(room);
    this.writeFile();
  }

  remove(id: string): boolean {
    let index = this.findRoomById(id);
    if (index == -1) {
      return false;
    }
    RoomManagenment.rooms.splice(index, 1);
    this.writeFile();
    return true;
  }

  update(id: string, room: Room): boolean {
    let index = this.findRoomById(id);
    if (index == -1) {
      return false;
    }
    RoomManagenment.rooms[index] = room;
    this.writeFile();
    return true;
  }
  findRoomById(id: string): number {
    let index = _.findIndex(
      RoomManagenment.rooms,
      (item: Room) => item.id === id
    );
    return index;
  }
  findRoomByName(name: string): any {
    console.log("name", name);
    let room = _.find(RoomManagenment.rooms, (item: Room) =>
      item.name.toUpperCase().includes(name.toUpperCase())
    );
    return room;
  }
  writeFile() {
    let file = {
      rooms: RoomManagenment.rooms,
    };
    fs.writeFileSync("../database/room.json", JSON.stringify(file));
  }
}
