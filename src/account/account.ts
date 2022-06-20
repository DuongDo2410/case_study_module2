enum Role {
  Admin = 1,
  User = 2,
}
export class Account {
  private _id: string;
  private _name: string;
  private _email: string;
  private _passWord: string;
  private _role: Role;

  constructor(
    id: string,
    name: string,
    email: string,
    passWord: string,
    role: Role
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._passWord = passWord;
    this._role = role;
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

  public get passWord(): string {
    return this._passWord;
  }

  public get role(): Role {
    return this._role;
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

  public set passWord(value: string) {
    this._passWord = value;
  }

  public set role(value: Role) {
    this._role = value;
  }

  public getEmail(): string {
    return this._email;
  }
}
