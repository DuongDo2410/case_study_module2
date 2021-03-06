export class Room {
  private _id: string;
  private _name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public set id(value: string) {
    this._id = value;
  }

  public set name(value: string) {
    this._name = value;
  }
}
