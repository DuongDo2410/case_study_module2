export class Staff {
  private _id: string;
  private _name: string;
  private _email: string;
  private _phone: string;
  private _address: string;
  private _idRoom: string;
  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    idRoom: string
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._address = address;
    this._idRoom = idRoom;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }

  public get phone(): string {
    return this._phone;
  }

  public get address(): string {
    return this._address;
  }
  public get idRoom(): string {
    return this._idRoom;
  }
  public set id(value: string) {
    this._id = value;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set email(value: string) {
    this._email = value;
  }

  public set phone(value: string) {
    this._phone = value;
  }

  public set address(value: string) {
    this._address = value;
  }
  public set idRoom(value: string) {
    this._idRoom = value;
  }
  // abstract payroll(): number;
}
