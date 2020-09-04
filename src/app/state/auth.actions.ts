import {UserDTO} from '../../api/models';


export class LoginAction {
  static readonly type = '[Auth] LoginAction';
  constructor(public email: string, public password: string) { }
}

export class RegisterAction {
  static readonly type = '[Auth] RegisterAction';
  constructor(public userDTO: UserDTO) { }
}
